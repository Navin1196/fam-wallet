import { Tabs } from "expo-router";
import { LayoutDashboard, GroupIcon, PiggyBank } from "lucide-react-native";

export default function FamilyTabsLayout() {
  return (
    <Tabs>
      {/* <Tabs.Screen
        name="/(tabs)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <LayoutDashboard size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <GroupIcon size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <GroupIcon size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PiggyBank size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
    </Tabs>
  );
}
