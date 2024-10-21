import { useRouter } from "expo-router";
import { View, ScrollView, FlatList } from "react-native";
import LottieView from "lottie-react-native";
import { QuestionCard, CourseLabel } from "@/components/";
import { courseLabel } from "@/data/course-label";
import { questionTemplate } from "@/data/question-template";

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <View className="flex-row gap-2 items-center mb-2">
          <FlatList
            data={courseLabel}
            renderItem={({ item }) => <CourseLabel title={item} />}
            horizontal
          />
        </View>
        <View className="flex-1">
          <FlatList
            data={questionTemplate}
            renderItem={({ item }) => (
              <QuestionCard
                className="mb-2"
                title={item.title}
                totalQuestions={item.totalQuestions}
                completedQuestions={item.completedQuestions}
                icon={item.icon}
                handlePress={() => router.push("/43")}
              />
            )}
          />
        </View>

        {/* <LottieView
          source={require("../assets/animations/welcome.json")}
          autoPlay
          loop
          style={{ width: 400, height: 400 }}
        /> */}
      </View>
    </ScrollView>
  );
}
