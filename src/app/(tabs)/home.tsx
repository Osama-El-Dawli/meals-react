import SliderItem from "@/features/home/components/slider-item";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SliderItem source={require('@/assets/images/slider-image2.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});