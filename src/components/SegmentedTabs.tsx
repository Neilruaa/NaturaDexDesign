import React from "react";
import { View, Text, Pressable, StyleSheet, ViewStyle } from "react-native";

export interface SegmentedTabsProps {
  /** Array of tab labels */
  tabs: string[];
  /** Currently active tab label */
  activeTab: string;
  /** Callback when a tab is pressed */
  onTabChange: (tab: string) => void;
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Pill-shaped segmented tab bar.
 * Used on Feed ("Around you" / "Friends") and Dex ("Fauna" / "Flora" / "Taming").
 */
export function SegmentedTabs({
  tabs,
  activeTab,
  onTabChange,
  style,
}: SegmentedTabsProps) {
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <Pressable
            key={tab}
            onPress={() => onTabChange(tab)}
            style={styles.pressable}
          >
            <View
              style={[
                styles.tab,
                isActive && styles.activeTab,
                isActive && {
                  shadowColor: "#6ee7b7",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 12,
                },
              ]}
            >
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}
              >
                {tab}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 9999,
    padding: 4,
  },
  pressable: {
    flex: 1,
  },
  tab: {
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "rgba(110,231,183,0.8)",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  activeLabel: {
    color: "#064e3b",
  },
  inactiveLabel: {
    color: "rgba(6,78,59,0.6)",
  },
});
