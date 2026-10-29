
import OnBoardingContainer from "@/features/onboarding/components/onboarding-container";
import { Image, StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/images/onboarding-bg.png")}
            />

            <OnBoardingContainer
                style={styles.contentContainer}
                title="Find the best recipes"
                description="Find the best recipes from around the world"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    image: {
        ...StyleSheet.absoluteFill,
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    contentContainer: {
        position: "absolute",
        bottom: 40,
    },
});
