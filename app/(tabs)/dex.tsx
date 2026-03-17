import { useState } from "react";
import { View, Text, Image, Pressable, FlatList, Dimensions } from "react-native";
import { MotiView } from "moti";
import { ANIMALS, Animal } from "../../src/data";
import { Star, Shield, Droplets } from "lucide-react-native";

const { width } = Dimensions.get("window");
const CARD_GAP = 16;
const CARD_WIDTH = (width - 16 * 2 - CARD_GAP) / 2;

function AnimalCard({ animal, index }: { animal: Animal; index: number }) {
    const hpPercentage = (animal.hp / animal.maxHp) * 100;

    return (
        <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 300, delay: index * 50 }}
            style={{
                width: CARD_WIDTH,
                marginBottom: CARD_GAP,
                borderRadius: 24,
                backgroundColor: "rgba(255,255,255,0.6)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,1)",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.03,
                shadowRadius: 24,
                elevation: 3,
                overflow: "hidden",
            }}
        >
            {/* Image */}
            <View style={{ aspectRatio: 1, padding: 8 }}>
                <View style={{ flex: 1, borderRadius: 16, overflow: "hidden" }}>
                    <Image
                        source={{ uri: animal.image }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                    {/* Type Badge */}
                    <View
                        style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            padding: 6,
                            borderRadius: 9999,
                            borderWidth: 1,
                            borderColor: "rgba(255,255,255,0.2)",
                        }}
                    >
                        {animal.rarity >= 4 ? (
                            <Shield size={14} color="#fcd34d" strokeWidth={2.5} />
                        ) : (
                            <Droplets size={14} color="#67e8f9" strokeWidth={2.5} />
                        )}
                    </View>
                </View>
            </View>

            {/* Info */}
            <View style={{ padding: 12, paddingTop: 4, gap: 8 }}>
                <Text className="text-sm font-bold text-emerald-950" numberOfLines={1}>
                    {animal.name}
                </Text>

                {/* Stars */}
                <View className="flex-row items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={12}
                            color={i < animal.rarity ? "#fbbf24" : "rgba(6,78,59,0.1)"}
                            fill={i < animal.rarity ? "#fbbf24" : "transparent"}
                        />
                    ))}
                </View>

                {/* HP Bar */}
                <View>
                    <View className="flex-row justify-between items-end mb-1">
                        <Text className="text-[10px] font-bold text-emerald-800/50 uppercase tracking-wider">
                            HP
                        </Text>
                        <Text className="text-[10px] font-semibold text-emerald-900/70">
                            {animal.hp}/{animal.maxHp}
                        </Text>
                    </View>
                    <View className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
                        <MotiView
                            from={{ width: "0%" as any }}
                            animate={{ width: `${hpPercentage}%` as any }}
                            transition={{ type: "timing", duration: 1000, delay: 500 + index * 100 }}
                            style={{
                                height: "100%",
                                borderRadius: 9999,
                                backgroundColor: hpPercentage > 50 ? "#10b981" : "#f59e0b",
                            }}
                        />
                    </View>
                </View>
            </View>
        </MotiView>
    );
}

export default function DexScreen() {
    const [activeTab, setActiveTab] = useState("Fauna");
    const tabs = ["Fauna", "Flora", "Taming"];

    return (
        <View className="flex-1 bg-[#f2f6f3]">
            {/* Tabs Header */}
            <View style={{ paddingTop: 60, paddingHorizontal: 16, paddingBottom: 8 }}>
                <View className="flex-row items-center bg-white/50 rounded-full p-1">
                    {tabs.map((tab) => (
                        <Pressable
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={{ flex: 1 }}
                        >
                            <View
                                className={`py-3 rounded-full items-center ${activeTab === tab ? "bg-emerald-300/80" : ""
                                    }`}
                                style={
                                    activeTab === tab
                                        ? {
                                            shadowColor: "#6ee7b7",
                                            shadowOffset: { width: 0, height: 4 },
                                            shadowOpacity: 0.3,
                                            shadowRadius: 12,
                                        }
                                        : undefined
                                }
                            >
                                <Text
                                    className={`text-sm font-semibold ${activeTab === tab
                                            ? "text-emerald-950"
                                            : "text-emerald-800/60"
                                        }`}
                                >
                                    {tab}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>

            {/* Grid */}
            <FlatList
                data={ANIMALS}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    paddingHorizontal: 16,
                }}
                contentContainerStyle={{ paddingBottom: 120, paddingTop: 8 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <AnimalCard animal={item} index={index} />
                )}
            />
        </View>
    );
}
