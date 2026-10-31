import { router } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { Meal } from "../models/meal-model";
import MealItem from "./meal-item";

type Props = {
  mealsData: Meal[]
}

export default function MealsList({ mealsData }: Props) {
  return (
    <FlatList<Meal>
      data={mealsData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Pressable onPress={() => {
          router.push({
            pathname: '/meal-details',
            params: {
              meal: JSON.stringify(item)
            }
          })
        }}>
          <MealItem meal={item} />
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
