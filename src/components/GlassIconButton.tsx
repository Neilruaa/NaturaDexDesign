import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import type { LucideIcon } from "lucide-react-native";

export interface GlassIconButtonProps {
  /** Lucide icon component */
  Icon: LucideIcon;
  /** Icon size (default: 22) */
  iconSize?: number;
  /** Callback on press */
  onPress?: () => void;
  /** Visual variant (default: "dark") */
  variant?: "light" | "dark";
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Translucent icon button with glass border.
 * Used for Camera top actions, Profile settings, Feed map button, etc.
 *
 * - `dark` variant: white icon on dark translucent bg (Camera screen)
 * - `light` variant: green icon on white translucent bg (Profile/Feed)
 */
export function GlassIconButton({
  Icon,
  iconSize = 22,
  onPress,
  variant = "dark",
  style,
}: GlassIconButtonProps) {
  const isDark = variant === "dark";

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        isDark ? styles.dark : styles.light,
        style,
      ]}
    >
      <Icon
        size={iconSize}
        color={isDark ? "rgba(255,255,255,0.7)" : "#047857"}
        strokeWidth={2.5}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  dark: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
  },
  light: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderColor: "white",
    borderRadius: 9999,
  },
});
