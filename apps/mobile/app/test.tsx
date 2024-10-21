import React, { useState } from "react";
import { View, Text, Pressable, Modal, Alert } from "react-native";
import { useTailwind } from "nativewind";

export default function GamePage() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [score, setScore] = useState(0);

  const subjects = ["Math", "Francais", "Physique", "Chimie"];

  const questions = {
    Math: "What is 2 + 2?",
    Francais: "How do you say 'apple' in French?",
    Physique: "What is the acceleration due to gravity?",
    Chimie: "What is the chemical formula of water?",
  };

  const answers = {
    Math: 4,
    Francais: "Pomme",
    Physique: "9.8 m/s²",
    Chimie: "H2O",
  };

  const handleAnswer = (subject, userAnswer) => {
    if (userAnswer === answers[subject]) {
      setScore(score + 1);
    }
    setCurrentSubject(null);

    if (Object.keys(questions).length - 1 === score) {
      setIsGameFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentSubject(null);
    setScore(0);
    setIsGameFinished(false);
  };

  const getEmojiForScore = () => {
    if (score === 4) return "🥇";
    if (score >= 3) return "😊";
    if (score === 2) return "😐";
    return "😢";
  };

  return (
    <View className="flex-1 bg-blue-50 p-4 justify-center items-center">
      <Text className="text-3xl font-bold mb-6 text-gray-800">
        Choose a Subject
      </Text>

      <View className="flex-row flex-wrap justify-center">
        {subjects.map((subject) => (
          <Pressable
            key={subject}
            onPress={() => setCurrentSubject(subject)}
            className="bg-green-500 p-4 rounded-full m-2"
          >
            <Text className="text-white text-lg">{subject}</Text>
          </Pressable>
        ))}
      </View>

      {currentSubject && (
        <View className="mt-6 w-full justify-center items-center">
          <Text className="text-xl font-bold mb-4 text-center">
            {questions[currentSubject]}
          </Text>
          <Pressable
            onPress={() =>
              handleAnswer(currentSubject, answers[currentSubject])
            }
            className="bg-blue-500 p-4 rounded-full"
          >
            <Text className="text-white text-lg">Answer Correctly</Text>
          </Pressable>
          <Pressable
            onPress={() => handleAnswer(currentSubject, "wrong answer")}
            className="bg-red-500 p-4 rounded-full mt-4"
          >
            <Text className="text-white text-lg">Answer Incorrectly</Text>
          </Pressable>
        </View>
      )}

      {isGameFinished && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isGameFinished}
          onRequestClose={() => {
            Alert.alert("Game finished, closing modal.");
            resetGame();
          }}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-6 rounded-lg items-center">
              <Text className="text-2xl font-bold mb-4">Game Over!</Text>
              <Text className="text-lg mb-4">Your Score: {score} / 4</Text>
              <Text className="text-4xl mb-4">{getEmojiForScore()}</Text>

              <Pressable
                onPress={resetGame}
                className="bg-green-500 p-4 rounded-full"
              >
                <Text className="text-white text-lg">Play Again</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
