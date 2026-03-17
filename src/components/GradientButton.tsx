import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface GradientButtonProps {
  /** Button label */
  label: string;
  /** Callback on press */
  onPress?: () => void;
  /** Gradient colors (default: emerald) */
  colors?: [string, string, ...string[]];
  /** Shadow color (default: #6ee7b7) */
  shadowColor?: string;
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Full-width gradient CTA button.
 * Used on Login screen ("Créer un compte") and anywhere a primary action is needed.
 */
export function GradientButton({
  label,
  onPress,
  colors = ["#2E6F40", "#A8DCAB"],
  shadowColor = "#6ee7b7",
  style,
}: GradientButtonProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.gradient,
          {
            shadowColor,
          },
        ]}
      >
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 6,
  },
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
