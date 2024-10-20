import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TabBarIcon } from "@/components/";

export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Acceuil",
            drawerIcon: ({ color, size }) => (
              <TabBarIcon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="test"
          options={{
            title: "Test",
            drawerIcon: ({ color, size }) => (
              <TabBarIcon name="science" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="account"
          options={{
            title: "Mon Compte",
            drawerIcon: ({ color, size }) => (
              <TabBarIcon name="account-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="feedback"
          options={{
            title: "Feedback",
            drawerIcon: ({ color, size }) => (
              <TabBarIcon name="feedback" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerIcon: ({ color, size }) => (
              <TabBarIcon name="settings" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
