import { Tabs } from "expo-router";
import {
  LayoutDashboard,
  Settings,
  PlusIcon,
  GroupIcon,
  ChartBar,
} from "lucide-react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <LayoutDashboard size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="add/index"
        options={{
          headerTitle: "Add",
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <PlusIcon size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="budgets/index"
        options={{
          headerTitle: "Budgets",
          title: "Budgets",
          tabBarIcon: ({ size, color }) => (
            <ChartBar size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="family"
        options={{
          headerTitle: "Family",
          title: "Family",
          tabBarIcon: ({ size, color }) => (
            <GroupIcon size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          headerTitle: "Settings",
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Settings size={24} color={color} strokeWidth={1.5} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
