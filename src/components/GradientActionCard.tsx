import React from "react";
import { View, Text, Pressable, StyleSheet, ViewStyle } from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import type { LucideIcon } from "lucide-react-native";

export interface GradientActionCardProps {
  /** Main title (e.g. "DUEL") */
  title: string;
  /** Subtitle text */
  subtitle: string;
  /** Optional caption text below subtitle */
  caption?: string;
  /** Lucide icon component */
  Icon: LucideIcon;
  /** Icon color */
  iconColor: string;
  /** Gradient background colors */
  colors: [string, string, ...string[]];
  /** Shadow accent color */
  shadowColor?: string;
  /** Callback on press */
  onPress?: () => void;
  /** Animation delay in ms (default: 100) */
  animationDelay?: number;
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Large gradient CTA card with centered icon, title, and subtitle.
 * Used on Combat screen for "Duel" and "Carrière" buttons.
 */
export function GradientActionCard({
  title,
  subtitle,
  caption,
  Icon,
  iconColor,
  colors,
  shadowColor = "#000",
  onPress,
  animationDelay = 100,
  style,
}: GradientActionCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", damping: 20, delay: animationDelay }}
      style={style}
    >
      <Pressable onPress={onPress}>
        <LinearGradient
          colors={colors}
          style={[
            styles.gradient,
            {
              shadowColor,
            },
          ]}
        >
          {/* Icon circle */}
          <View style={styles.iconCircle}>
            <Icon size={40} color={iconColor} strokeWidth={2.5} />
          </View>

          <Text style={[styles.title, { color: iconColor }]}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {caption && <Text style={styles.caption}>{caption}</Text>}
        </LinearGradient>
      </Pressable>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 6,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(250,235,215,0.8)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(151,87,43,0.7)",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 32,
  },
  caption: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(151,87,43,0.5)",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
});
