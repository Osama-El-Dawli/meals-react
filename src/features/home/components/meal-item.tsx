import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { Meal } from "../models/meal-model";

type Props = {
  meal: Meal;
};

export default function MealItem({ meal }: Props) {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);

  const showFallback = imageFailed || !meal.imageUrl;

  return (
    <View style={styles.container}>
      {showFallback ? (
        <View style={[styles.image, styles.fallback]}>
          <Ionicons color={'white'} size={30} name='alert-circle-outline' />
        </View>
      ) : (
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.image}
          onError={() => setImageFailed(true)}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{meal.name}</Text>
        <Text style={styles.subtitle}>
          {meal.calories} {t("Calories")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  fallback: {
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginStart: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#121A0F",
  },
  subtitle: {
    fontSize: 14,
    color: "#FE8C00",
  },
});