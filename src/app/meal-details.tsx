import { Meal } from "@/features/home/models/meal-model";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MealDetails() {
  const { meal } = useLocalSearchParams<{ meal: string }>();

  if (!meal) return null;

  const mealData: Meal = JSON.parse(meal);

  const [imageFailed, setImageFailed] = useState(false);

  const showFallback = imageFailed || !mealData.imageUrl;

  return (
    <View>
      {showFallback ? (
        <View style={[styles.image, styles.fallback]}>
          <Ionicons color={"white"} size={60} name="alert-circle-outline" />
        </View>
      ) : (
        <Image
          source={{
            uri: mealData.imageUrl,
          }}
          onError={() => setImageFailed(true)}
          style={styles.image}
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{mealData.name}</Text>
        <View style={styles.timeAndRate}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time" color={"#FE8C00"} size={14} />
            <Text style={styles.time}>{mealData.time}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="star" color={"#FE8C00"} size={14} />
            <Text style={styles.time}>{mealData.rate}</Text>
          </View>
        </View>
        <Text style={styles.description}>{mealData.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    resizeMode: "cover",
    aspectRatio: 16 / 9,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121A0F",
    marginTop: 20,
  },
  timeAndRate: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginVertical: 12,
    backgroundColor: "#FE8C000A",
  },
  time: {
    fontSize: 14,
    color: "#878787",
    paddingHorizontal: 8,
  },
  description: {
    fontSize: 16,
    color: "#121A0F",
    marginTop: 4,
  },
  fallback: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
