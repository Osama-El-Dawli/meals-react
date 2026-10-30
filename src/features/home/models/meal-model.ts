import { ImageSourcePropType } from "react-native";

export interface Meal {
  name: string,
  calories: number,
  image: ImageSourcePropType,
}

export const mealsData: Meal[] = [
  {
    name: "Breakfast Smoothie",
    calories: 350,
    image: require("@/assets/images/item-image.png"),
  },
  {
    name: "Breakfast Smoothie",
    calories: 350,
    image: require("@/assets/images/item-image.png"),
  },
]