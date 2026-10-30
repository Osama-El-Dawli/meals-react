import { FlatList } from "react-native";
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
        <MealItem meal={item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
