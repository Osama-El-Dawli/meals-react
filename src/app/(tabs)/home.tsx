import ImageSlider from "@/features/home/components/image-slider";
import MealsList from "@/features/home/components/meals-list";
import { mealsData } from "@/features/home/models/meal-model";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <ImageSlider images={[
                require('@/assets/images/slider-image1.png'),
                require('@/assets/images/slider-image2.png'),
            ]} />
            <View style={styles.mealsSection}>
                <Text style={styles.title}>{t('My Meals')}</Text>
                <MealsList mealsData={mealsData} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mealsSection: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 12,
        color: '#121A0F',
    }
});