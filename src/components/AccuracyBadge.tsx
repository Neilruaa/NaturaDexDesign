import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Sparkles } from "lucide-react-native";

export interface AccuracyBadgeProps {
  /** Accuracy percentage (0-100) */
  accuracy: number;
}

/**
 * Amber pill badge with sparkle icon showing accuracy percentage.
 * Designed to be overlaid on images (position: absolute).
 */
export function AccuracyBadge({ accuracy }: AccuracyBadgeProps) {
  return (
    <View style={styles.badge}>
      <Sparkles size={16} color="white" />
      <Text style={styles.text}>{accuracy}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#f59e0b",
    shadowColor: "#fbbf24",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
