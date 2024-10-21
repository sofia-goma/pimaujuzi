import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setIsDarkModeEnabled((prev) => !prev);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Settings</Text>

      {/* Account Settings Section */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Account
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/account")}
          style={{
            paddingVertical: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/privacy")}
          style={{
            paddingVertical: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/password")}
          style={{ paddingVertical: 15 }}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Notifications
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text>Push Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/notification-preferences")}
          style={{ paddingVertical: 15 }}
        >
          <Text>Notification Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Preferences
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text>Dark Mode</Text>
          <Switch value={isDarkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/language")}
          style={{ paddingVertical: 15 }}
        >
          <Text>Language</Text>
        </TouchableOpacity>
      </View>

      {/* Help & Support Section */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Help & Support
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/help-center")}
          style={{
            paddingVertical: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/about")}
          style={{ paddingVertical: 15 }}
        >
          <Text>About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
