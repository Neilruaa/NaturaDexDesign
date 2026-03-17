import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { MotiView } from "moti";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#f2f6f3]">
            {/* Background ambient glows */}
            <View className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-emerald-300/20 -translate-x-1/2 -translate-y-1/2" />
            <View className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-200/20 translate-x-1/3 translate-y-1/3" />

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    padding: 24,
                }}
                keyboardShouldPersistTaps="handled"
            >
                <MotiView
                    from={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "timing", duration: 500 }}
                >
                    {/* Logo/Brand */}
                    <View className="items-center mb-8">
                        <Text className="text-3xl font-bold text-emerald-900 mb-2">Bienvenue</Text>
                        <Text className="text-emerald-700/70 text-base">
                            Créez votre compte pour commencer
                        </Text>
                    </View>

                    {/* Main Card */}
                    <View
                        style={{
                            borderRadius: 32,
                            backgroundColor: "rgba(255,255,255,0.4)",
                            borderWidth: 1,
                            borderColor: "rgba(255,255,255,0.6)",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 8 },
                            shadowOpacity: 0.04,
                            shadowRadius: 30,
                            padding: 24,
                        }}
                    >
                        {/* Email Field */}
                        <View className="mb-4">
                            <Text className="text-sm font-semibold text-emerald-900 mb-2">Mail</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="example@example.com"
                                    placeholderTextColor="rgba(4,120,87,0.4)"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.6)",
                                        borderWidth: 1,
                                        borderColor: "rgba(255,255,255,0.8)",
                                        borderRadius: 16,
                                        paddingHorizontal: 16,
                                        paddingVertical: 14,
                                        paddingRight: 48,
                                        fontSize: 14,
                                        color: "#064e3b",
                                    }}
                                />
                                <View style={{ position: "absolute", right: 16, top: "50%", marginTop: -9 }}>
                                    <Mail size={18} color="rgba(5,150,105,0.4)" />
                                </View>
                            </View>
                        </View>

                        {/* Password Field */}
                        <View className="mb-4">
                            <Text className="text-sm font-semibold text-emerald-900 mb-2">Mot de passe</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="••••••••"
                                    placeholderTextColor="rgba(4,120,87,0.4)"
                                    secureTextEntry={!showPassword}
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.6)",
                                        borderWidth: 1,
                                        borderColor: "rgba(255,255,255,0.8)",
                                        borderRadius: 16,
                                        paddingHorizontal: 16,
                                        paddingVertical: 14,
                                        paddingRight: 48,
                                        fontSize: 14,
                                        color: "#064e3b",
                                    }}
                                />
                                <Pressable
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={{ position: "absolute", right: 16, top: "50%", marginTop: -9, padding: 4 }}
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} color="rgba(5,150,105,0.4)" />
                                    ) : (
                                        <Eye size={18} color="rgba(5,150,105,0.4)" />
                                    )}
                                </Pressable>
                            </View>
                        </View>

                        {/* Confirm Password Field */}
                        <View className="mb-6">
                            <Text className="text-sm font-semibold text-emerald-900 mb-2">
                                Confirmer le mot de passe
                            </Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    placeholder="••••••••"
                                    placeholderTextColor="rgba(4,120,87,0.4)"
                                    secureTextEntry={!showConfirmPassword}
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.6)",
                                        borderWidth: 1,
                                        borderColor: "rgba(255,255,255,0.8)",
                                        borderRadius: 16,
                                        paddingHorizontal: 16,
                                        paddingVertical: 14,
                                        paddingRight: 48,
                                        fontSize: 14,
                                        color: "#064e3b",
                                    }}
                                />
                                <Pressable
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={{ position: "absolute", right: 16, top: "50%", marginTop: -9, padding: 4 }}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={18} color="rgba(5,150,105,0.4)" />
                                    ) : (
                                        <Eye size={18} color="rgba(5,150,105,0.4)" />
                                    )}
                                </Pressable>
                            </View>
                        </View>

                        {/* Create Account Button */}
                        <Pressable onPress={() => router.replace("/(tabs)")}>
                            <LinearGradient
                                colors={["#34d399", "#10b981"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    paddingVertical: 16,
                                    borderRadius: 16,
                                    alignItems: "center",
                                    marginBottom: 24,
                                    shadowColor: "#6ee7b7",
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 12,
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
                                    Créer un compte
                                </Text>
                            </LinearGradient>
                        </Pressable>

                        {/* Divider */}
                        <View className="mb-6" style={{ position: "relative", height: 20, justifyContent: "center" }}>
                            <View style={{ height: 1, backgroundColor: "rgba(6,78,59,0.1)" }} />
                            <View
                                style={{
                                    position: "absolute",
                                    alignSelf: "center",
                                    paddingHorizontal: 16,
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: 9999,
                                }}
                            >
                                <Text className="text-[12px] font-medium text-emerald-700/70">ou continuer avec</Text>
                            </View>
                        </View>

                        {/* Social Login Buttons */}
                        <View style={{ gap: 12 }}>
                            <Pressable
                                style={{
                                    paddingVertical: 14,
                                    borderRadius: 16,
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 12,
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>🇬</Text>
                                <Text className="text-sm font-semibold text-emerald-900">Connexion avec Google</Text>
                            </Pressable>

                            <Pressable
                                style={{
                                    paddingVertical: 14,
                                    borderRadius: 16,
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 12,
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>🍎</Text>
                                <Text className="text-sm font-semibold text-emerald-900">Connexion Apple ID</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Sign In Link */}
                    <View className="mt-6 items-center">
                        <Text className="text-sm text-emerald-700">
                            Vous avez déjà un compte ?{" "}
                            <Text
                                className="font-semibold text-emerald-600"
                                style={{ textDecorationLine: "underline" }}
                                onPress={() => router.replace("/(tabs)")}
                            >
                                Se connecter
                            </Text>
                        </Text>
                    </View>
                </MotiView>
            </ScrollView>
        </View>
    );
}
