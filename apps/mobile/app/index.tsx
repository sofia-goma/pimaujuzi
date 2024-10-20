import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <Text className="bg-red-50 text-5xl">
        Edit app/index.tsx to edit this screen.
      </Text>

      <LottieView
        source={require("../assets/animations/welcome.json")}
        autoPlay
        loop
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}
