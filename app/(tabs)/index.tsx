import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { MotiView } from "moti";
import { Heart, MessageCircle, MapPin, Sparkles, Map } from "lucide-react-native";
import { FEED_EVENTS } from "../../src/data";

export default function FeedScreen() {
  return (
    <View className="flex-1 bg-solarpunk-page">
      {/* Ambient glow backgrounds */}
      <View className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-solarpunk-leather/10 -translate-x-1/2 -translate-y-1/2" />
      <View className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-solarpunk-sky/15 translate-x-1/3 translate-y-1/3" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 60, paddingBottom: 120, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Bar */}
        <View className="flex-row items-center justify-between py-4 mb-2">
          <View className="flex-row items-center bg-solarpunk-green/20 rounded-full p-1">
            <View className="px-5 py-2.5 bg-solarpunk-green/80 rounded-full">
              <Text className="text-solarpunk-leather text-sm font-semibold">Around you</Text>
            </View>
            <View className="px-5 py-2.5">
              <Text className="text-solarpunk-leather/60 text-sm font-medium">Friends</Text>
            </View>
          </View>
          <View className="p-3 bg-white/70 rounded-2xl border border-white">
            <Map size={22} color="#047857" strokeWidth={2.5} />
          </View>
        </View>

        {/* Feed Cards */}
        {FEED_EVENTS.map((event, i) => (
          <MotiView
            key={event.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 400, delay: i * 100 }}
            style={{
              marginBottom: 24,
              borderRadius: 32,
              backgroundColor: "rgba(250,235,215,0.6)",
              borderWidth: 1,
              borderColor: "rgba(250,235,215,0.8)",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.04,
              shadowRadius: 30,
              elevation: 4,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <View className="flex-row items-center gap-3 p-4">
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  overflow: "hidden",
                  borderWidth: 2,
                  borderColor: "rgba(255,255,255,0.8)",
                }}
              >
                <Image
                  source={{ uri: event.userAvatar }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
              <Text className="text-[15px] text-solarpunk-leather/80 flex-1 flex-shrink">
                <Text className="font-bold text-solarpunk-leather">{event.userName}</Text> captured a{" "}
                <Text className="font-bold text-solarpunk-leather">{event.animal.name}</Text>
              </Text>
            </View>

            {/* Main Image */}
            <View className="px-4">
              <View
                style={{
                  width: "100%",
                  aspectRatio: 4 / 3,
                  borderRadius: 24,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: event.animal.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
                {/* Accuracy Badge */}
                <View
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
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
                  }}
                >
                  <Sparkles size={16} color="white" />
                  <Text className="text-white font-bold text-sm">{event.accuracy}%</Text>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View className="flex-row items-center justify-between p-4 px-5">
              <View className="flex-row items-center gap-4">
                <View className="flex-row items-center gap-2">
                  <View className="p-2.5 rounded-full bg-amber-50 border border-amber-100/50">
                    <Heart size={20} color="#f59e0b" strokeWidth={2.5} />
                  </View>
                  <Text className="text-sm font-semibold text-solarpunk-leather/60">{event.likes}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <View className="p-2.5 rounded-full bg-solarpunk-page border border-solarpunk-green/30">
                    <MessageCircle size={20} color="#A8DCAB" strokeWidth={2.5} />
                  </View>
                  <Text className="text-sm font-semibold text-solarpunk-leather/60">{event.comments}</Text>
                </View>
              </View>

              <View className="flex-row items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/60 border border-white max-w-[50%]">
                <MapPin size={16} color="#d97706" strokeWidth={2.5} />
                <Text className="text-[13px] font-semibold text-solarpunk-leather/70" numberOfLines={1}>
                  {event.location}
                </Text>
              </View>
            </View>
          </MotiView>
        ))}
      </ScrollView>
    </View>
  );
}
