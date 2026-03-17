import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { MotiView } from "moti";
import { Mail, Lock } from "lucide-react-native";
import { useRouter } from "expo-router";
import { GlassCard, FormInput, GradientButton } from "../src/components";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <View className="flex-1 bg-solarpunk-page">
            {/* Background ambient glows */}
            <View className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-solarpunk-leather/10 -translate-x-1/2 -translate-y-1/2" />
            <View className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-solarpunk-sky/15 translate-x-1/3 translate-y-1/3" />

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    padding: 24,
                }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <MotiView
                    from={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "timing", duration: 500 }}
                >
                    {/* Logo/Brand */}
                    <View className="items-center mb-8">
                        <Text className="text-3xl font-bold text-solarpunk-leather mb-2">Bon retour !</Text>
                        <Text className="text-solarpunk-leather/70 text-base text-center px-4">
                            Connectez-vous à votre compte
                        </Text>
                    </View>

                    {/* Main Card */}
                    <GlassCard padding={24}>
                        {/* Email Field */}
                        <FormInput
                            label="Mail"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="example@example.com"
                            Icon={Mail}
                            keyboardType="email-address"
                        />

                        {/* Password Field */}
                        <View className="mb-2">
                            <FormInput
                                label="Mot de passe"
                                value={password}
                                onChangeText={setPassword}
                                placeholder="••••••••"
                                secureTextEntry
                                visibilityToggle={[showPassword, setShowPassword]}
                                style={{ marginBottom: 0 }}
                            />
                        </View>

                        {/* Forgot Password Link */}
                        <View className="mb-6 items-end">
                            <Pressable>
                                <Text className="text-sm font-semibold text-solarpunk-leather">
                                    Mot de passe oublié ?
                                </Text>
                            </Pressable>
                        </View>

                        {/* Sign In Button */}
                        <GradientButton
                            label="Se connecter"
                            onPress={() => router.replace("/(tabs)")}
                            style={{ marginBottom: 24 }}
                        />

                        {/* Divider */}
                        <View className="mb-6" style={{ position: "relative", height: 20, justifyContent: "center" }}>
                            <View style={{ height: 1, backgroundColor: "rgba(151,87,43,0.1)" }} />
                            <View
                                style={{
                                    position: "absolute",
                                    alignSelf: "center",
                                    paddingHorizontal: 16,
                                    backgroundColor: "rgba(250,235,215,0.8)",
                                    borderRadius: 9999,
                                }}
                            >
                                <Text className="text-[12px] font-medium text-solarpunk-leather/70">ou continuer avec</Text>
                            </View>
                        </View>

                        {/* Social Login Buttons */}
                        <View style={{ gap: 12 }}>
                            <Pressable
                                style={{
                                    paddingVertical: 14,
                                    borderRadius: 16,
                                    backgroundColor: "rgba(250,235,215,0.9)",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 12,
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>🇬</Text>
                                <Text className="text-sm font-semibold text-solarpunk-leather">Connexion avec Google</Text>
                            </Pressable>

                            <Pressable
                                style={{
                                    paddingVertical: 14,
                                    borderRadius: 16,
                                    backgroundColor: "rgba(250,235,215,0.9)",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 12,
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>🍎</Text>
                                <Text className="text-sm font-semibold text-solarpunk-leather">Connexion Apple ID</Text>
                            </Pressable>
                        </View>
                    </GlassCard>

                    {/* Sign Up Link */}
                    <View className="mt-6 items-center">
                        <Text className="text-sm text-solarpunk-leather">
                            Vous n'avez pas de compte ?{" "}
                            <Text
                                className="font-semibold text-solarpunk-leather"
                                style={{ textDecorationLine: "underline" }}
                                onPress={() => router.replace("/signup")}
                            >
                                Créer un compte
                            </Text>
                        </Text>
                    </View>
                </MotiView>
            </ScrollView>
        </View>
    );
}
