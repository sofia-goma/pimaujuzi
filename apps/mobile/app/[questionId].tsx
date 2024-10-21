import React, { useState, useEffect } from "react";
import { View, Text, Alert, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { useTailwind } from "nativewind";

export default function DetailsScreen() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    "What is the value of sin(30°)?",
    "Solve for x: 2x + 4 = 10",
    "What is the derivative of x²?",
    // Add more questions here
  ];

  useEffect(() => {
    if (isGameStarted && timeLeft > 0 && !isGameFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 || currentQuestionIndex >= questions.length) {
      finishGame();
    }
  }, [timeLeft, isGameStarted, isGameFinished]);

  const startGame = () => {
    setIsGameStarted(true);
    setTimeLeft(60);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
  };

  const finishGame = () => {
    setIsGameFinished(true);
    setIsGameStarted(false);
    Alert.alert("Time's up!", "Game Over!");
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishGame();
    }
  };

  return (
    <View className="flex-1 bg-green-50 justify-center items-center">
      {isGameFinished ? (
        <LottieView
          source={require("../assets/animations/congratulations.json")}
          autoPlay
          loop={false}
          style={{ width: "100%", height: "100%" }}
          // style={"w-full h-full")}
        />
      ) : (
        <>
          {!isGameStarted ? (
            <Pressable
              onPress={startGame}
              className="bg-green-500 p-4 rounded-full mt-5"
            >
              <Text className="text-white text-lg font-bold">Start Game</Text>
            </Pressable>
          ) : (
            <View className="w-full h-full justify-center items-center">
              <Text className="text-2xl font-semibold mb-4 text-center">
                {questions[currentQuestionIndex]}
              </Text>
              <Text className="text-xl mb-6 text-gray-700">
                Time Left: {timeLeft} seconds
              </Text>
              <Pressable
                onPress={handleNextQuestion}
                className="bg-blue-500 p-4 rounded-full mt-5"
              >
                <Text className="text-white text-lg font-bold">
                  Next Question
                </Text>
              </Pressable>
            </View>
          )}
        </>
      )}
    </View>
  );
}
