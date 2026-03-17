import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { MotiView } from "moti";
import { Settings, Award, Camera as CameraIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { USER_PROFILE, FEED_EVENTS } from "../../src/data";

export default function ProfileScreen() {
    const bestCapture = FEED_EVENTS[0];
    const router = useRouter();

    return (
        <View className="flex-1 bg-solarpunk-page">
            {/* Header */}
            <View
                style={{
                    paddingTop: 56,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 24,
                    paddingVertical: 16,
                    backgroundColor: "rgba(250,235,215,0.6)",
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(255,255,255,0.5)",
                }}
            >
                <Text className="text-xl font-black text-solarpunk-leather tracking-tight">Profile</Text>
                <Pressable
                    onPress={() => router.replace("/login")}
                    style={{
                        padding: 10,
                        borderRadius: 9999,
                        backgroundColor: "rgba(168,220,171,0.1)",
                        borderWidth: 1,
                        borderColor: "rgba(255,255,255,0.8)",
                    }}
                >
                    <Settings size={20} color="#97572B" />
                </Pressable>
            </View>

            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 24, paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                {/* User Stats */}
                <MotiView
                    from={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    style={{ flexDirection: "row", alignItems: "center", gap: 24, marginBottom: 32 }}
                >
                    <View style={{ position: "relative" }}>
                        {/* Avatar with gradient ring */}
                        <View
                            style={{
                                width: 96,
                                height: 96,
                                borderRadius: 48,
                                padding: 3,
                                backgroundColor: "#2E6F40",
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 48,
                                    borderWidth: 4,
                                    borderColor: "white",
                                    overflow: "hidden",
                                    backgroundColor: "white",
                                }}
                            >
                                <Image
                                    source={{ uri: USER_PROFILE.avatar }}
                                    style={{ width: "100%", height: "100%" }}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                        {/* Level Badge */}
                        <View
                            style={{
                                position: "absolute",
                                bottom: -8,
                                right: -8,
                                backgroundColor: "#A8DCAB",
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: 4,
                                borderColor: "white",
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
                                {USER_PROFILE.level}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text className="text-2xl font-bold text-solarpunk-leather mb-3">{USER_PROFILE.name}</Text>
                        <View className="flex-row gap-6">
                            <View>
                                <Text className="text-xl font-bold text-solarpunk-leather">{USER_PROFILE.captured}</Text>
                                <Text className="text-[11px] font-semibold text-solarpunk-leather/60 mt-1 uppercase tracking-wide">
                                    Captured
                                </Text>
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-solarpunk-leather">{USER_PROFILE.followers}</Text>
                                <Text className="text-[11px] font-semibold text-solarpunk-leather/60 mt-1 uppercase tracking-wide">
                                    Followers
                                </Text>
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-solarpunk-leather">{USER_PROFILE.following}</Text>
                                <Text className="text-[11px] font-semibold text-solarpunk-leather/60 mt-1 uppercase tracking-wide">
                                    Following
                                </Text>
                            </View>
                        </View>
                    </View>
                </MotiView>

                {/* Badges */}
                <MotiView
                    from={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 100 }}
                    style={{ marginBottom: 32 }}
                >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
                        <View
                            style={{
                                width: 112,
                                height: 112,
                                borderRadius: 24,
                                backgroundColor: "#fef3c7",
                                borderWidth: 1,
                                borderColor: "rgba(251,191,36,0.5)",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                marginRight: 12,
                            }}
                        >
                            <View
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    backgroundColor: "#fde68a",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Award size={24} color="#d97706" fill="#f59e0b" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontWeight: "700",
                                    color: "rgba(120,53,15,0.8)",
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                    lineHeight: 14,
                                }}
                            >
                                Expert{"\n"}Hunter
                            </Text>
                        </View>

                        <View
                            style={{
                                width: 112,
                                height: 112,
                                borderRadius: 24,
                                backgroundColor: "rgba(254,243,199,0.6)",
                                borderWidth: 1,
                                borderColor: "rgba(251,191,36,0.3)",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                            }}
                        >
                            <View
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    backgroundColor: "rgba(253,230,138,0.5)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CameraIcon size={24} color="rgba(217,119,6,0.7)" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontWeight: "700",
                                    color: "rgba(120,53,15,0.6)",
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                    lineHeight: 14,
                                }}
                            >
                                Sharp{"\n"}Shooter
                            </Text>
                        </View>
                    </ScrollView>

                    {/* Bio */}
                    <View
                        style={{
                            backgroundColor: "rgba(250,235,215,0.8)",
                            borderRadius: 16,
                            padding: 16,
                            borderWidth: 1,
                            borderColor: "rgba(255,255,255,0.8)",
                        }}
                    >
                        <Text className="text-sm font-medium text-solarpunk-leather/80">
                            🌳 Nature enthusiast | 📸 Wildlife photographer
                        </Text>
                    </View>
                </MotiView>

                {/* Best Captures */}
                <MotiView
                    from={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 200 }}
                >
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-bold text-solarpunk-leather">My Best Captures</Text>
                        <Text className="text-sm font-semibold text-solarpunk-leather/50">3 posts</Text>
                    </View>

                    <View
                        style={{
                            borderRadius: 32,
                            backgroundColor: "rgba(250,235,215,0.6)",
                            borderWidth: 1,
                            borderColor: "rgba(250,235,215,0.8)",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 8 },
                            shadowOpacity: 0.04,
                            shadowRadius: 30,
                            overflow: "hidden",
                        }}
                    >
                        <View className="flex-row items-center gap-3 p-4">
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    borderWidth: 2,
                                    borderColor: "rgba(255,255,255,0.8)",
                                }}
                            >
                                <Image
                                    source={{ uri: USER_PROFILE.avatar }}
                                    style={{ width: "100%", height: "100%" }}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text className="text-sm font-medium text-solarpunk-leather/80">
                                You captured a{" "}
                                <Text className="font-bold text-solarpunk-leather">{bestCapture.animal.name}</Text>
                            </Text>
                        </View>

                        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                            <View
                                style={{
                                    width: "100%",
                                    aspectRatio: 1,
                                    borderRadius: 24,
                                    overflow: "hidden",
                                    borderWidth: 1,
                                    borderColor: "rgba(0,0,0,0.05)",
                                }}
                            >
                                <Image
                                    source={{ uri: bestCapture.animal.image }}
                                    style={{ width: "100%", height: "100%" }}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    </View>
                </MotiView>
            </ScrollView>
        </View>
    );
}
