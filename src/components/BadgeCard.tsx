import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import type { LucideIcon } from "lucide-react-native";

export interface BadgeCardProps {
  /** Lucide icon component */
  Icon: LucideIcon;
  /** Icon color */
  iconColor: string;
  /** Icon fill color (optional, for filled icons like Award) */
  iconFill?: string;
  /** Badge label (can include \n for line breaks) */
  label: string;
  /** Background color of the card */
  bgColor: string;
  /** Border color */
  borderColor: string;
  /** Background color of the icon circle */
  iconBgColor: string;
  /** Label text color */
  labelColor?: string;
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Square badge tile with icon circle and label.
 * Used in the Profile badge carousel.
 */
export function BadgeCard({
  Icon,
  iconColor,
  iconFill,
  label,
  bgColor,
  borderColor,
  iconBgColor,
  labelColor = "rgba(120,53,15,0.8)",
  style,
}: BadgeCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: bgColor, borderColor }, style]}>
      <View style={[styles.iconCircle, { backgroundColor: iconBgColor }]}>
        <Icon
          size={24}
          color={iconColor}
          fill={iconFill || "transparent"}
        />
      </View>
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 112,
    height: 112,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 14,
  },
});
