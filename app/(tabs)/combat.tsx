import { View, Text, Pressable, Dimensions } from "react-native";
import { MotiView } from "moti";
import { Sword, Map, Zap } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function CombatScreen() {
    return (
        <View className="flex-1 bg-[#f2f6f3]">
            {/* Ambient Glow */}
            <View
                style={{
                    position: "absolute",
                    top: -100,
                    right: -50,
                    width: 384,
                    height: 384,
                    borderRadius: 192,
                    backgroundColor: "rgba(251,191,36,0.1)",
                }}
            />
            <View
                style={{
                    position: "absolute",
                    bottom: -100,
                    left: -100,
                    width: 384,
                    height: 384,
                    borderRadius: 192,
                    backgroundColor: "rgba(16,185,129,0.1)",
                }}
            />

            {/* Header */}
            <View style={{ paddingTop: 72, paddingBottom: 16, alignItems: "center" }}>
                <View className="flex-row items-center gap-2">
                    <Zap size={24} color="#f59e0b" fill="#f59e0b" />
                    <Text className="text-2xl font-black text-emerald-950 tracking-tight">ARENA</Text>
                </View>
                <Text className="text-sm font-medium text-emerald-800/60 mt-1">
                    Challenge others or explore the wild
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                    gap: 24,
                    paddingBottom: 100,
                }}
            >
                {/* Duel Button */}
                <MotiView
                    from={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "spring", damping: 20, delay: 100 }}
                >
                    <Pressable>
                        <LinearGradient
                            colors={["rgba(255,251,235,0.9)", "rgba(255,237,213,0.8)"]}
                            style={{
                                width: "100%",
                                aspectRatio: 4 / 3,
                                borderRadius: 40,
                                borderWidth: 1,
                                borderColor: "rgba(255,255,255,0.8)",
                                alignItems: "center",
                                justifyContent: "center",
                                shadowColor: "#fbbf24",
                                shadowOffset: { width: 0, height: 8 },
                                shadowOpacity: 0.15,
                                shadowRadius: 32,
                                elevation: 6,
                            }}
                        >
                            {/* Decorative corners */}
                            <View style={{ position: "absolute", top: 16, left: 16, width: 16, height: 16, borderTopWidth: 2, borderLeftWidth: 2, borderColor: "rgba(120,53,15,0.1)", borderTopLeftRadius: 12 }} />
                            <View style={{ position: "absolute", top: 16, right: 16, width: 16, height: 16, borderTopWidth: 2, borderRightWidth: 2, borderColor: "rgba(120,53,15,0.1)", borderTopRightRadius: 12 }} />

                            {/* Icon Circle */}
                            <View
                                style={{
                                    width: 96,
                                    height: 96,
                                    borderRadius: 48,
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderWidth: 1,
                                    borderColor: "rgba(255,255,255,0.8)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 16,
                                }}
                            >
                                <Sword size={40} color="#ef4444" strokeWidth={2.5} />
                            </View>

                            <Text
                                style={{
                                    fontSize: 32,
                                    fontWeight: "900",
                                    color: "#f59e0b",
                                    letterSpacing: 3,
                                }}
                            >
                                DUEL
                            </Text>
                            <Text className="text-emerald-950/70 font-semibold mt-2 text-[15px]">
                                1v1 Online Battle
                            </Text>
                            <Text
                                style={{
                                    color: "rgba(6,78,59,0.5)",
                                    fontSize: 14,
                                    fontWeight: "500",
                                    marginTop: 4,
                                    textTransform: "uppercase",
                                    letterSpacing: 3,
                                }}
                            >
                                MMR: 500
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </MotiView>

                {/* Carrière Button */}
                <MotiView
                    from={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "spring", damping: 20, delay: 200 }}
                >
                    <Pressable>
                        <LinearGradient
                            colors={["rgba(236,253,245,0.9)", "rgba(204,251,241,0.8)"]}
                            style={{
                                width: "100%",
                                aspectRatio: 4 / 3,
                                borderRadius: 40,
                                borderWidth: 1,
                                borderColor: "rgba(255,255,255,0.8)",
                                alignItems: "center",
                                justifyContent: "center",
                                shadowColor: "#10b981",
                                shadowOffset: { width: 0, height: 8 },
                                shadowOpacity: 0.15,
                                shadowRadius: 32,
                                elevation: 6,
                            }}
                        >
                            {/* Decorative corners */}
                            <View style={{ position: "absolute", bottom: 16, left: 16, width: 16, height: 16, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: "rgba(6,78,59,0.1)", borderBottomLeftRadius: 12 }} />
                            <View style={{ position: "absolute", bottom: 16, right: 16, width: 16, height: 16, borderBottomWidth: 2, borderRightWidth: 2, borderColor: "rgba(6,78,59,0.1)", borderBottomRightRadius: 12 }} />

                            {/* Icon Circle */}
                            <View
                                style={{
                                    width: 96,
                                    height: 96,
                                    borderRadius: 48,
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderWidth: 1,
                                    borderColor: "rgba(255,255,255,0.8)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 16,
                                }}
                            >
                                <Map size={40} color="#059669" strokeWidth={2.5} />
                            </View>

                            <Text
                                style={{
                                    fontSize: 28,
                                    fontWeight: "900",
                                    color: "#059669",
                                    letterSpacing: 4,
                                }}
                            >
                                CARRIÈRE
                            </Text>
                            <Text className="text-emerald-950/70 font-semibold mt-3 text-sm text-center leading-relaxed px-8">
                                Progress through the world{"\n"}and fight the Erosion
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </MotiView>
            </View>
        </View>
    );
}
