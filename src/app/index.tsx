import { ONBOARDING_SHOWN_KEY } from "@/consts/app-consts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LottieView style={styles.animation}
        source={require("../../assets/animations/splash.json")}
        autoPlay loop={false}
        onAnimationFinish={async () => {
          const onBoadingShown = await AsyncStorage.getItem(ONBOARDING_SHOWN_KEY);
          if (onBoadingShown === 'true') {
            router.replace('/(tabs)/home');
          } else {
            router.replace('/onboarding');
          }
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  animation: {
    width: '100%',
    height: '100%',
  }
});
