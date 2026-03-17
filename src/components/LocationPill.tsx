import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MapPin } from "lucide-react-native";

export interface LocationPillProps {
  /** Location name to display */
  location: string;
}

/**
 * Compact location tag with pin icon — used in Feed cards.
 */
export function LocationPill({ location }: LocationPillProps) {
  return (
    <View style={styles.pill}>
      <MapPin size={16} color="#d97706" strokeWidth={2.5} />
      <Text style={styles.text} numberOfLines={1}>
        {location}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 9999,
    backgroundColor: "rgba(250,235,215,0.8)",
    borderWidth: 1,
    borderColor: "white",
    maxWidth: "50%",
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: "rgba(151,87,43,0.7)",
    flexShrink: 1,
  },
});
