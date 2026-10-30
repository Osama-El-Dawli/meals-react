import { z } from "zod";

export const mealSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Meal name is required")
    .max(60, "Meal name must be at most 60 characters"),

  calories: z
    .string()
    .trim()
    .min(1, "Calories is required")
    .transform(Number),

  imageUrl: z
    .string()
    .trim()
    .min(1, "Image URL is required")
    .pipe(z.url("Enter a valid URL (https://...)")),

  rate: z
    .string()
    .trim()
    .min(1, "Rate is required")
    .refine((v) => !isNaN(Number(v)), "Rate must be a number")
    .refine((v) => Number(v) >= 0 && Number(v) <= 5, "Rate must be between 0 and 5"),

  time: z
    .string()
    .trim()
    .min(1, "Time is required"),

  description: z
    .string()
    .min(1, 'Description is required')
    .trim(),
});

export type MealFormValues = z.input<typeof mealSchema>;
export type Meal = z.output<typeof mealSchema>;
export type MealFormErrors = Partial<Record<keyof MealFormValues, string>>;