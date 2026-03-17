import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export interface UserAvatarProps {
  /** Image URI for the avatar */
  uri: string;
  /** Outer size in pixels (default: 96) */
  size?: number;
  /** User level — shown as a badge if provided */
  level?: number;
  /** Ring color (default: #34d399) */
  ringColor?: string;
}

/**
 * Circular avatar with colored ring and optional level badge.
 * Used on Profile screen and could be reused in any user-facing context.
 */
export function UserAvatar({
  uri,
  size = 96,
  level,
  ringColor = "#34d399",
}: UserAvatarProps) {
  const half = size / 2;
  const badgeSize = size * 0.375; // ~36px at default 96

  return (
    <View style={{ position: "relative", width: size, height: size }}>
      {/* Gradient ring */}
      <View
        style={[
          styles.ring,
          {
            width: size,
            height: size,
            borderRadius: half,
            backgroundColor: ringColor,
          },
        ]}
      >
        <View
          style={[
            styles.innerRing,
            {
              borderRadius: half,
            },
          ]}
        >
          <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Level Badge */}
      {level !== undefined && (
        <View
          style={[
            styles.levelBadge,
            {
              width: badgeSize,
              height: badgeSize,
              borderRadius: badgeSize / 2,
            },
          ]}
        >
          <Text style={[styles.levelText, { fontSize: badgeSize * 0.39 }]}>
            {level}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    padding: 3,
  },
  innerRing: {
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  levelBadge: {
    position: "absolute",
    bottom: -8,
    right: -8,
    backgroundColor: "#10b981",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "white",
  },
  levelText: {
    color: "white",
    fontWeight: "bold",
  },
});
