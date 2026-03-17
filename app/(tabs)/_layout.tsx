import { Tabs } from "expo-router";
import { CustomTabBar } from "../../src/components/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Feed" }} />
      <Tabs.Screen name="dex" options={{ title: "Dex" }} />
      <Tabs.Screen name="camera" options={{ title: "Scan" }} />
      <Tabs.Screen name="combat" options={{ title: "PVP" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
