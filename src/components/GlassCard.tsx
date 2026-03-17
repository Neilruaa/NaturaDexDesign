import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

export interface GlassCardProps {
  children: React.ReactNode;
  /** Border radius (default: 32) */
  borderRadius?: number;
  /** Additional styles */
  style?: ViewStyle;
  /** Padding inside the card (default: 0) */
  padding?: number;
}

/**
 * Frosted glass card container with subtle shadow and white border.
 * Used as the base container for Feed cards, Profile cards, Login forms, etc.
 */
export function GlassCard({
  children,
  borderRadius = 32,
  style,
  padding = 0,
}: GlassCardProps) {
  return (
    <View
      style={[
        styles.card,
        { borderRadius, padding },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(250,235,215,0.6)",
    borderWidth: 1,
    borderColor: "rgba(250,235,215,0.8)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 30,
    elevation: 4,
    overflow: "hidden",
  },
});
