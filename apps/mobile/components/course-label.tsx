import { View, Text } from "react-native";

export function CourseLabel({ title }: { title: string }) {
  return (
    <View className="p-2 border-border border rounded-lg mr-1">
      <Text>{title}</Text>
    </View>
  );
}
