import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface QuestionCardProps {
  title: string;
  totalQuestions: number;
  completedQuestions: number;
  icon?: React.ReactNode;
  className?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  totalQuestions,
  completedQuestions,
  icon,
  className,
}) => {
  const progress = (completedQuestions / totalQuestions) * 100;

  return (
    <View className={`rounded-lg p-4 w-full border border-border mb-2 ${className}`}>
      <View className="flex-row items-center">
        <View className="mr-4">{icon}</View>
        <View className="flex-1">
          <Text className="text-lg font-bold mb-2">{title}</Text>
          <Text className="text-gray-500">
            {completedQuestions} / {totalQuestions}
          </Text>
          <View className="mt-2 bg-mutedForeground h-2 rounded-md overflow-hidden">
            <View
              className="bg-ring h-full"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
