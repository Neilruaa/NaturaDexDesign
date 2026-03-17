import React from "react";
import { View, Pressable, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";
import { Home, Book, Camera, Zap, User } from "lucide-react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const TABS = [
  { name: "index", icon: Home, label: "Feed" },
  { name: "dex", icon: Book, label: "Dex" },
  { name: "camera", icon: Camera, label: "Scan" },
  { name: "combat", icon: Zap, label: "PVP" },
  { name: "profile", icon: User, label: "Profile" },
];

/**
 * Liquid glass bottom navigation bar.
 *
 * Pass it to `<Tabs tabBar={(props) => <CustomTabBar {...props} />}>`.
 *
 * Sizing is controlled in `styles.wrapper` (left / right / bottom / height).
 * The glass effect is built from three layers inside `styles.glassBody`:
 *   1. BlurView  — real background blur
 *   2. innerShine — white overlay for frosted brightness
 *   3. innerBorder — specular rim highlight
 */
export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.glassBody}>
        {/* 1. Background blur */}
        <BlurView
          tint="light"
          intensity={Platform.OS === "ios" ? 80 : 100}
          experimentalBlurMethod="dimezisBlurView"
          style={StyleSheet.absoluteFill}
        />
        {/* 2. Frosted brightness overlay */}
        <View style={styles.innerShine} />
        {/* 3. Specular rim border */}
        <View style={styles.innerBorder} />

        {/* Icons */}
        <View style={styles.iconsRow}>
          {TABS.map((tab, index) => {
            const isFocused = state.index === index;
            const Icon = tab.icon;
            return (
              <Pressable
                key={tab.name}
                onPress={() => navigation.navigate(tab.name)}
                style={styles.tabItem}
                accessibilityLabel={tab.label}
              >
                <Icon
                  size={24}
                  color={isFocused ? "#97572B" : "rgba(151,87,43, 0.4)"}
                  strokeWidth={isFocused ? 2.5 : 2}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    // ─── Position & Size ─────────────────────────────
    bottom: 32,      // Distance from bottom of screen
    left: "5%",      // Left inset  ─┐ change both equally
    right: "5%",     // Right inset ─┘ to keep it centered
    // ─────────────────────────────────────────────────
    alignItems: "center",
  },
  glassBody: {
    width: "100%",
    height: 72,      // ← Bar height
    borderRadius: 9999,
    overflow: "hidden",
    // Glass border (specular top / bottom)
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderTopColor: "rgba(255, 255, 255, 0.9)",
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    // Drop shadow
    shadowColor: "#97572B",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  innerShine: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 9999,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  innerBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
    margin: 1,
    borderTopColor: "rgba(250,235,215,0.8)",
  },
  iconsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
