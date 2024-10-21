import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Linking } from "react-native";
import { styled } from "nativewind";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === "") {
      Alert.alert("Error", "Please enter your feedback.");
      return;
    }
    Alert.alert("Thank You!", "Your feedback has been submitted.");
    setFeedback(""); // Clear feedback after submission
  };

  const handleDonate = () => {
    // Link to donation page (use actual donation URL)
    Linking.openURL("https://www.donation-link.com");
  };

  return (
    <View className="flex-1 p-4 bg-white justify-center items-center">
      <Text className="text-2xl font-bold mb-4">We Value Your Feedback</Text>

      <TextInput
        className="w-full h-40 border border-gray-300 p-2 rounded-lg mb-4"
        placeholder="Enter your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
        textAlignVertical="top"
      />

      <View className="w-full flex-row justify-between mb-4">
        <Button title="Submit Feedback" onPress={handleFeedbackSubmit} />
        <Button title="Donate" onPress={handleDonate} />
      </View>

      <Text className="text-gray-500 mt-4">
        Your feedback helps us improve. You can also support us by donating.
      </Text>
    </View>
  );
}
