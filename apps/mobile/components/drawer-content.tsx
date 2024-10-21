import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
export function DrawerContent(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#2563eb" }}
      >
        <StatusBar backgroundColor="#2563eb" />
        <View className="p-5">
          <Feather name="user" color="white" size={80} className="mb-2" />
          <Text className="text-primaryForeground text-xl mb-2">John Doe</Text>
          <View className="flex-row">
            <Text className="text-primaryForeground mr-1">280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </View>
        <View className="flex-1 bg-background pt-2">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View className="p-5 border-t border-border">
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View className="flex-row items-center">
            <Ionicons name="share-social-outline" size={22} />
            <Text className="text-sm ml-1">Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View className="flex-row items-center">
            <Ionicons name="exit-outline" size={22} />
            <Text className="text-sm ml-1">Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
