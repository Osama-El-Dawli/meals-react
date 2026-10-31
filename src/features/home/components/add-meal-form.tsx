import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import Toast from 'react-native-simple-toast';
import { Meal, MealFormValues, mealSchema } from "../models/meal-model";
import { saveMeal } from "../services/meals-storage";
import CustomButton from "./custom-button";
import InputField from "./input-field";


export default function AddMealForm() {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MealFormValues, unknown, Meal>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      name: "",
      calories: "",
      imageUrl: "",
      rate: "",
      time: "",
      description: "",
    },
  });

  async function onSubmit(data: Meal) {
    try {
      await saveMeal(data);
      reset();

      Toast.show(t('Meal Saved Successfully!'), Toast.BOTTOM);
    } catch {
      Toast.show(
        t('Failed to save meal.'),
        Toast.BOTTOM
      );
    }
  }
  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <InputField
            title={t("Meal Name")}
            value={field.value}
            onChangeText={field.onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <InputField
            title={t("Image URL")}
            numberOfLines={3}
            value={field.value}
            onChangeText={field.onChange}
            error={errors.imageUrl?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="calories"
        render={({ field }) => (
          <InputField
            title={t("Calories")}
            keyboardType="number-pad"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.calories?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="rate"
        render={({ field }) => (
          <InputField
            title={t("Rate")}
            keyboardType="decimal-pad"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.rate?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="time"
        render={({ field }) => (
          <InputField
            title={t("Time")}
            value={field.value}
            onChangeText={field.onChange}
            error={errors.time?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <InputField
            title={t("Description")}
            numberOfLines={5}
            value={field.value}
            onChangeText={field.onChange}
            error={errors.description?.message}
          />
        )}
      />
      <View style={{ marginTop: 12 }}>
        <CustomButton onPress={handleSubmit(onSubmit)}
          text={t("Save")} />
      </View>
    </View>
  );
}
