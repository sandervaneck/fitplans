import { z } from "zod";
import { MealFormType, TrainingFormType } from "../types/types";

export const TrainingOutput = z.object({
  trainings: z.array(
    z.object({
      week: z.number(),
      trainings: z.array(
        z.object({
          day: z.string(),
          totaltime: z.number(),
          location: z.string(),
          workouttype: z.string(),
          excercises: z.array(z.string()),
        })
      ),
    })
  ),
});

export const MealOutput = z.object({
  meals: z.array(
    z.object({
      week: z.number(),
      monday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      tuesday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      wednesday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      thursday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      friday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      saturday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
      sunday: z.array(
        z.object({
          mealtype: z.string(),
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          kcal: z.number(),
          protein: z.number(),
          carbs: z.number(),
          fats: z.number(),
        })
      ),
    })
  ),
});

export const emptyTrainingForm: TrainingFormType = {
  weigth: 78,
  age: 34,
  goal: "Improve my leg strength and chest size",
  weeks: 2,
  workouts: {
    numberofworkoutsaweek: 5,
    workouts: [""],
  },
};
export const emptyMealInputForm: MealFormType = {
  weigth: 78,
  age: 34,
  goal: "Grow my chest",
  weeks: 2,
  meals: {
    mealsaday: 4,
    exclusions: [""],
    favoritefoods: [""],
  },
};
