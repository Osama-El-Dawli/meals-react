import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../models/meal-model";

const MEALS_KEY = "@meals";

export async function getMeals(): Promise<Meal[]> {
  const data = await AsyncStorage.getItem(MEALS_KEY);

  return data ? (JSON.parse(data) as Meal[]) : [];
}

export async function saveMeal(meal: Meal): Promise<void> {
  const meals = await getMeals();

  meals.push(meal);

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(meals));
}

export async function deleteMeal(index: number): Promise<void> {
  const meals = await getMeals();

  meals.splice(index, 1);

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(meals));
}