# NaturaDex — Reusable Components

All components are exported from this folder via `index.ts`.
Import anything in one line:

```tsx
import { GlassCard, FeedCard, GradientButton } from "../src/components";
```

---

## Components

### `CustomTabBar`
Liquid glass bottom navigation bar. Pass it to the Expo Router `<Tabs>` component.
```tsx
import { Tabs } from "expo-router";
import { CustomTabBar } from "../src/components";

<Tabs tabBar={(props) => <CustomTabBar {...props} />}>
  <Tabs.Screen name="index" />
</Tabs>
```
> **To resize:** open `CustomTabBar.tsx` and edit `styles.wrapper` (`left`, `right`, `bottom`) and `styles.glassBody` (`height`).

---

### `GlassCard`
Frosted glass card container. Wraps any content.
```tsx
<GlassCard borderRadius={24} padding={16}>
  <Text>Hello</Text>
</GlassCard>
```

---

### `FeedCard`
Full feed event card (avatar, image, likes, location).
```tsx
import { FeedCard } from "../src/components";
import { FEED_EVENTS } from "../src/data";

{FEED_EVENTS.map((event, i) => (
  <FeedCard key={event.id} event={event} index={i} />
))}
```

---

### `AnimalCard`
Dex grid card. Use inside a `FlatList` with `numColumns={2}`.
```tsx
import { AnimalCard } from "../src/components";
import { ANIMALS } from "../src/data";

<FlatList
  data={ANIMALS}
  numColumns={2}
  renderItem={({ item, index }) => (
    <AnimalCard animal={item} index={index} />
  )}
/>
```

---

### `GradientActionCard`
Large gradient card for primary actions (e.g. Combat screen).
```tsx
import { Sword } from "lucide-react-native";

<GradientActionCard
  title="DUEL"
  subtitle="1v1 Online Battle"
  caption="MMR: 500"
  Icon={Sword}
  iconColor="#ef4444"
  colors={["rgba(255,251,235,0.9)", "rgba(255,237,213,0.8)"]}
  shadowColor="#fbbf24"
  onPress={() => console.log("Duel!")}
/>
```

---

### `BadgeCard`
Square badge tile for the profile badge carousel.
```tsx
import { Award } from "lucide-react-native";

<BadgeCard
  Icon={Award}
  iconColor="#d97706"
  iconFill="#f59e0b"
  label={"Expert\nHunter"}
  bgColor="#fef3c7"
  borderColor="rgba(251,191,36,0.5)"
  iconBgColor="#fde68a"
/>
```

---

### `SegmentedTabs`
Pill-shaped tab switcher.
```tsx
const [activeTab, setActiveTab] = useState("Fauna");

<SegmentedTabs
  tabs={["Fauna", "Flora", "Taming"]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

---

### `GlassIconButton`
Icon button with a translucent glass background.
- `variant="dark"` — white icon, for dark backgrounds (Camera screen)
- `variant="light"` — green icon, for light backgrounds (Profile screen)
```tsx
import { Settings } from "lucide-react-native";

<GlassIconButton Icon={Settings} variant="light" onPress={() => {}} />
```

---

### `GradientButton`
Full-width gradient CTA button.
```tsx
<GradientButton
  label="Créer un compte"
  onPress={() => router.push("/(tabs)")}
  colors={["#34d399", "#10b981"]}
  shadowColor="#6ee7b7"
/>
```

---

### `FormInput`
Styled text input with label and icon. Add `visibilityToggle` for password fields.
```tsx
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

// Plain input with icon:
<FormInput
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="you@example.com"
  Icon={Mail}
  keyboardType="email-address"
/>

// Password input with show/hide toggle:
<FormInput
  label="Password"
  value={password}
  onChangeText={setPassword}
  placeholder="••••••••"
  secureTextEntry
  visibilityToggle={[showPassword, setShowPassword]}
/>
```

---

### `UserAvatar`
Circular avatar with colored ring and optional level badge.
```tsx
<UserAvatar
  uri="https://example.com/avatar.jpg"
  size={96}
  level={12}
  ringColor="#34d399"
/>
```

---

### `AccuracyBadge`
Amber badge overlay — place inside a container with `position: "relative"`.
```tsx
<View style={{ position: "relative" }}>
  <Image ... />
  <View style={{ position: "absolute", top: 16, right: 16 }}>
    <AccuracyBadge accuracy={94} />
  </View>
</View>
```

---

### `LocationPill`
Location tag with pin icon, max 50% width.
```tsx
<LocationPill location="Forêt de Brocéliande" />
```
