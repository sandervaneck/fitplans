"use client";
import { useMediaQuery, Stack, Card } from "@mui/material";
import { useState } from "react";
import { emptyMealInputForm } from "../components/emptyForms";
import { NavigateTabs } from "../components/NavigateTabs";
import { RequestMealPlanForm } from "../components/RequestForm/RequestMealPlanForm";
import { Meal, MealScheduleAnswerType, MealsPerWeek } from "../types/types";
import { MealPlans } from "./MealplanCards";

export const MealPlanPageContent = () => {
  const [form, setForm] = useState(emptyMealInputForm);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [answer, setAnswer] = useState<MealScheduleAnswerType | null>(null);
  const clientSessionId = crypto.randomUUID();

  const mealsPerMealType: Record<string, Meal[]> = {};

  const createdMealPlan =
    answer && randomMealPlanCreator(answer, mealsPerMealType, form.weeks);
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Card
        sx={{
          maxWidth: isMobile ? "80%" : "60%",
          backgroundColor: "background.paper",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: { sm: "none", md: "divider" },
          gap: 4,
          margin: 10,
        }}
      >
        <NavigateTabs v={0} />
        <RequestMealPlanForm
          form={form}
          setForm={setForm}
          isMobile={isMobile}
          answer={answer}
          setAnswer={setAnswer}
        />
      </Card>
      {createdMealPlan !== null && (
        <MealPlans
          plans={createdMealPlan}
          preview={true}
          clientSessionId={clientSessionId}
        />
      )}
    </Stack>
  );
};

const randomMealPlanCreator = (
  answer: MealScheduleAnswerType,
  mealsPerMealType: Record<string, Meal[]>,
  weeks: number
): MealsPerWeek[] => {
  // Iterate over the plans for each week
  answer.meals.forEach((weekPlan) => {
    // Iterate over each day of the week
    Object.values(weekPlan).forEach((dayMeals) => {
      // Ensure that dayMeals is an array of meals
      if (Array.isArray(dayMeals)) {
        // Iterate over each meal and categorize by mealtype
        dayMeals.forEach((meal) => {
          if (!mealsPerMealType[meal.mealtype]) {
            mealsPerMealType[meal.mealtype] = [];
          }
          mealsPerMealType[meal.mealtype].push(meal);
        });
      }
    });
  });

  const getRandomMeal = (meals: Meal[]): Meal => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  };

  // Function to generate a MealsPerWeek
  const generateMealsPerWeek = (i: number): MealsPerWeek => {
    const weekMeals: MealsPerWeek = {
      week: i, // Set this later if needed
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    };

    // Function to generate meals for a specific day (one of the weekdays)
    const mealTypes = [
      ...new Set(answer.meals.flatMap((i) => i.monday.map((m) => m.mealtype))),
    ];
    const generateDayMeals = (): Meal[] => {
      const dayMeals: Meal[] = [];
      mealTypes.forEach((mealType) => {
        // Get a random meal for this mealType from mealsPerMealType
        const randomMeal = getRandomMeal(mealsPerMealType[mealType]);
        dayMeals.push(randomMeal);
      });
      return dayMeals;
    };

    // Assign meals for each day of the week
    weekMeals.monday = generateDayMeals();
    weekMeals.tuesday = generateDayMeals();
    weekMeals.wednesday = generateDayMeals();
    weekMeals.thursday = generateDayMeals();
    weekMeals.friday = generateDayMeals();
    weekMeals.saturday = generateDayMeals();
    weekMeals.sunday = generateDayMeals();

    return weekMeals;
  };

  const generatedWeekMeals = createRange(0, weeks).map((week, i) =>
    generateMealsPerWeek(i + 1)
  );
  return generatedWeekMeals;
};

export const createRange = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (v, k) => k + start);
