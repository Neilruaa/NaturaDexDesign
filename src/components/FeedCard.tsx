import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Heart, MessageCircle } from "lucide-react-native";
import { GlassCard } from "./GlassCard";
import { AccuracyBadge } from "./AccuracyBadge";
import { LocationPill } from "./LocationPill";
import type { FeedEvent } from "../data";

export interface FeedCardProps {
  /** Feed event data */
  event: FeedEvent;
  /** Index for staggered animation delay */
  index?: number;
}

/**
 * Full feed event card:
 * - Avatar header with username + animal name
 * - 4:3 image with accuracy badge overlay
 * - Like / Comment actions
 * - Location pill
 */
export function FeedCard({ event, index = 0 }: FeedCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 400, delay: index * 100 }}
      style={{ marginBottom: 24 }}
    >
      <GlassCard borderRadius={32}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: event.userAvatar }}
              style={styles.avatarImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.headerText}>
            <Text style={styles.headerBold}>{event.userName}</Text> captured a{" "}
            <Text style={styles.headerAnimal}>{event.animal.name}</Text>
          </Text>
        </View>

        {/* Main Image */}
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: event.animal.image }}
              style={styles.mainImage}
              resizeMode="cover"
            />
            <View style={styles.badgePosition}>
              <AccuracyBadge accuracy={event.accuracy} />
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.actionItem}>
              <View style={styles.heartBtn}>
                <Heart size={20} color="#f59e0b" strokeWidth={2.5} />
              </View>
              <Text style={styles.actionCount}>{event.likes}</Text>
            </View>
            <View style={styles.actionItem}>
              <View style={styles.commentBtn}>
                <MessageCircle size={20} color="#10b981" strokeWidth={2.5} />
              </View>
              <Text style={styles.actionCount}>{event.comments}</Text>
            </View>
          </View>
          <LocationPill location={event.location} />
        </View>
      </GlassCard>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.8)",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 15,
    color: "rgba(6,78,59,0.8)",
    flex: 1,
    flexShrink: 1,
  },
  headerBold: {
    fontWeight: "bold",
    color: "#064e3b",
  },
  headerAnimal: {
    fontWeight: "bold",
    color: "#059669",
  },
  imageContainer: {
    paddingHorizontal: 16,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 24,
    overflow: "hidden",
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  badgePosition: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingHorizontal: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  heartBtn: {
    padding: 10,
    borderRadius: 9999,
    backgroundColor: "#fffbeb",
    borderWidth: 1,
    borderColor: "rgba(251,191,36,0.5)",
  },
  commentBtn: {
    padding: 10,
    borderRadius: 9999,
    backgroundColor: "#ecfdf5",
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.5)",
  },
  actionCount: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(6,78,59,0.6)",
  },
});
