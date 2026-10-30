import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { Meal } from "../models/meal-model";

type Props = {
  meal: Meal,
}

export default function MealItem({ meal }: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image source={{uri: meal.imageUrl }}
      width={56}
      height={56}
        style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{meal.name}</Text>
        <Text style={styles.subtitle}>{meal.calories} {t('Calories')}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    maxWidth: 56,
    aspectRatio: 1,
    borderRadius: 8,
  },
  textContainer: {
    marginStart: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#121A0F',
  },
  subtitle: {
    fontSize: 14,
    color: '#FE8C00',
  }
});