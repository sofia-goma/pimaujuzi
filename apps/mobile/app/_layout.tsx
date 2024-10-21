import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TabBarIcon } from "@/components/";
import { StatusBar } from "expo-status-bar";
import { DrawerContent } from "@/components/";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#2563eb" />
      <GestureHandlerRootView className="flex-1">
        <Drawer
          initialRouteName="index"
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2563eb",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        >
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
                <MaterialIcons name="science" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="account"
            options={{
              title: "Mon Compte",
              drawerIcon: ({ color, size }) => (
                <Feather name="user" size={size} color={color} />
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
          <Drawer.Screen
            name="feedback"
            options={{
              title: "Feedback",
              drawerIcon: ({ color, size }) => (
                <MaterialIcons name="feedback" size={size} color={color} />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
