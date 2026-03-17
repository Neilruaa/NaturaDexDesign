import { useState, useEffect } from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import { Pause, Map as MapIcon, Aperture, ScanLine } from "lucide-react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function CameraScreen() {
    const [scanning, setScanning] = useState(false);
    const [animalFound, setAnimalFound] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => setScanning((s) => !s), 2000);
        return () => clearInterval(timer);
    }, []);

    const handleCapture = () => {
        setAnimalFound(true);
        setTimeout(() => {
            setAnimalFound(false);
            router.push("/dex");
        }, 2500);
    };

    return (
        <View className="flex-1 bg-zinc-950" style={{ width, height }}>
            {/* Dark Gradient Background */}
            <LinearGradient
                colors={["rgba(151,87,43,0.4)", "#09090b", "rgba(19,78,74,0.3)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            />

            {/* Top Actions */}
            <View
                style={{
                    position: "absolute",
                    top: 60,
                    right: 16,
                    zIndex: 50,
                    gap: 12,
                }}
            >
            </View>

            {/* Reticle / Scanner UI */}
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <MotiView
                    animate={{
                        scale: scanning ? 1.05 : 0.95,
                        opacity: scanning ? 0.8 : 0.4,
                    }}
                    transition={{ type: "timing", duration: 2000 }}
                    style={{ width: 256, height: 256, position: "relative" }}
                >
                    {/* Corners */}
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 32,
                            height: 32,
                            borderTopWidth: 2,
                            borderLeftWidth: 2,
                            borderColor: "rgba(245,158,11,0.5)",
                            borderTopLeftRadius: 24,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 32,
                            height: 32,
                            borderTopWidth: 2,
                            borderRightWidth: 2,
                            borderColor: "rgba(245,158,11,0.5)",
                            borderTopRightRadius: 24,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: 32,
                            height: 32,
                            borderBottomWidth: 2,
                            borderLeftWidth: 2,
                            borderColor: "rgba(245,158,11,0.5)",
                            borderBottomLeftRadius: 24,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: 32,
                            height: 32,
                            borderBottomWidth: 2,
                            borderRightWidth: 2,
                            borderColor: "rgba(245,158,11,0.5)",
                            borderBottomRightRadius: 24,
                        }}
                    />

                    {/* Corner Dots */}
                    {[
                        { top: 8, left: 8 },
                        { top: 8, right: 8 },
                        { bottom: 8, left: 8 },
                        { bottom: 8, right: 8 },
                    ].map((pos, i) => (
                        <View
                            key={i}
                            style={{
                                position: "absolute",
                                ...pos,
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "#2E6F40",
                                shadowColor: "#2E6F40",
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.8,
                                shadowRadius: 12,
                            }}
                        />
                    ))}

                    {/* Center Target */}
                    <View
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 64,
                            height: 64,
                            marginTop: -32,
                            marginLeft: -32,
                            borderWidth: 1,
                            borderColor: "rgba(168,220,171,0.3)",
                            borderRadius: 32,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "#2E6F40",
                                shadowColor: "#2E6F40",
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1,
                                shadowRadius: 20,
                            }}
                        />
                    </View>
                </MotiView>
            </View>

            {/* Capture Button */}
            <Pressable
                onPress={handleCapture}
                style={{
                    position: "absolute",
                    bottom: 128,
                    left: "50%",
                    marginLeft: -48,
                    width: 96,
                    height: 96,
                    borderRadius: 48,
                    borderWidth: 4,
                    borderColor: "rgba(168,220,171,0.3)",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 40,
                }}
            >
                <View
                    style={{
                        width: 64,
                        height: 64,
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: 32,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "rgba(255,255,255,0.5)",
                        shadowColor: "#2E6F40",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        shadowRadius: 30,
                    }}
                >
                    <Aperture size={32} color="rgba(255,255,255,0.8)" />
                </View>
            </Pressable>

            {/* Capture Overlay */}
            <AnimatePresence>
                {animalFound && (
                    <MotiView
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 50,
                            backgroundColor: "rgba(151,87,43,0.9)",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <MotiView
                            from={{ scale: 0.8, translateY: 50 }}
                            animate={{ scale: 1, translateY: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            style={{ alignItems: "center" }}
                        >
                            <LinearGradient
                                colors={["#2E6F40", "#14b8a6"]}
                                style={{
                                    width: 128,
                                    height: 128,
                                    borderRadius: 64,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 24,
                                    shadowColor: "#2E6F40",
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 50,
                                    borderWidth: 4,
                                    borderColor: "rgba(255,255,255,0.2)",
                                }}
                            >
                                <ScanLine size={48} color="white" />
                            </LinearGradient>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "white",
                                    letterSpacing: -0.5,
                                    marginBottom: 8,
                                }}
                            >
                                Analyzing...
                            </Text>
                            <Text style={{ color: "rgba(110,231,183,0.8)", fontSize: 16 }}>
                                Identifying species data
                            </Text>
                        </MotiView>
                    </MotiView>
                )}
            </AnimatePresence>
        </View>
    );
}
