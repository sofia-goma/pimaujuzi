import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TabBarIcon } from "./tab-bar-icon";

export const QuestionCard: React.FC<IQuestionCardProps> = ({
  title,
  totalQuestions,
  completedQuestions,
  icon,
  className,
  handlePress,
}) => {
  const progress = (completedQuestions / totalQuestions) * 100;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        className={`rounded-lg p-4 w-full border border-border mb-2 bg-background ${className}`}
      >
        <StatusBar style="light" backgroundColor="#2563eb" />
        <View className="flex-row items-center">
          <View className="mr-4">
            <TabBarIcon name={icon} size={52} color="#64748b" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold mb-2">{title}</Text>
            <Text className="text-gray-500">
              {completedQuestions} / {totalQuestions}
            </Text>
            <View className="mt-2 bg-destructive h-2 rounded-md overflow-hidden">
              <View
                className="bg-ring h-full"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
