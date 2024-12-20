"use client";
import { useMediaQuery, Stack, Card } from "@mui/material";
import { useState } from "react";
import { emptyMealInputForm } from "../components/emptyForms";
import { NavigateTabs } from "../components/NavigateTabs";
import { RequestMealPlanForm } from "../components/RequestForm/RequestMealPlanForm";
import { Meal, MealScheduleAnswerType, MealsPerWeek } from "../types/types";
import { MealPlans } from "./MealplanCards";

// const example: MealScheduleAnswerType = {
//   meals: [
//     {
//       week: 1,
//       monday: [
//         {
//           mealtype: "Breakfast",
//           name: "Scrambled Eggs with Toast",
//           ingredients: [
//             "2 Eggs",
//             "50ml Skim Milk",
//             "1 slice Whole Grain Bread",
//             "1 tsp Butter",
//           ],
//           instructions: [
//             "Whisk the eggs and milk in a bowl.",
//             "Heat butter in a pan over medium heat.",
//             "Pour the egg mixture into the pan and stir until cooked.",
//             "Serve with toasted whole-grain bread.",
//           ],
//           kcal: 300,
//           protein: 18,
//           carbs: 20,
//           fats: 12,
//         },
//         {
//           mealtype: "Snack",
//           name: "Apple with Peanut Butter",
//           ingredients: ["1 Apple", "20g Peanut Butter"],
//           instructions: [
//             "Slice the apple into wedges.",
//             "Spread peanut butter onto the apple slices and serve.",
//           ],
//           kcal: 200,
//           protein: 4,
//           carbs: 25,
//           fats: 10,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Grilled Chicken with Quinoa Salad",
//           ingredients: [
//             "150g Grilled Chicken Breast",
//             "50g Quinoa",
//             "30g Spinach",
//             "10g Feta Cheese",
//             "1 tbsp Olive Oil",
//           ],
//           instructions: [
//             "Cook the quinoa according to package instructions.",
//             "Combine cooked quinoa, spinach, and feta cheese in a bowl.",
//             "Top with grilled chicken and drizzle with olive oil.",
//           ],
//           kcal: 450,
//           protein: 40,
//           carbs: 35,
//           fats: 15,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Baked Salmon with Vegetables",
//           ingredients: [
//             "120g Salmon Fillet",
//             "100g Broccoli",
//             "50g Carrots",
//             "1 tbsp Olive Oil",
//             "1 Lemon Wedge",
//           ],
//           instructions: [
//             "Preheat the oven to 200°C (400°F).",
//             "Place salmon and vegetables on a baking tray.",
//             "Drizzle olive oil over the salmon and vegetables.",
//             "Bake for 20 minutes or until salmon is cooked through.",
//             "Serve with a lemon wedge on the side.",
//           ],
//           kcal: 400,
//           protein: 35,
//           carbs: 20,
//           fats: 20,
//         },
//       ],
//       tuesday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//       wednesday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//       thursday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//       friday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//       saturday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//       sunday: [
//         {
//           mealtype: "Breakfast",
//           name: "Greek Yogurt with Granola",
//           ingredients: ["150g Greek Yogurt", "30g Granola", "1 tbsp Honey"],
//           instructions: [
//             "Spoon Greek yogurt into a bowl.",
//             "Sprinkle granola on top and drizzle with honey.",
//           ],
//           kcal: 250,
//           protein: 12,
//           carbs: 30,
//           fats: 7,
//         },
//         {
//           mealtype: "Snack",
//           name: "Banana and Almonds",
//           ingredients: ["1 Banana", "15g Almonds"],
//           instructions: ["Peel and slice the banana. Eat with almonds."],
//           kcal: 220,
//           protein: 4,
//           carbs: 30,
//           fats: 9,
//         },
//         {
//           mealtype: "Lunch",
//           name: "Turkey and Avocado Wrap",
//           ingredients: [
//             "1 Whole Wheat Wrap",
//             "100g Turkey Breast",
//             "50g Avocado",
//             "30g Lettuce",
//             "1 tbsp Light Mayonnaise",
//           ],
//           instructions: [
//             "Spread mayonnaise onto the wrap.",
//             "Add turkey breast, avocado slices, and lettuce.",
//             "Wrap tightly and serve.",
//           ],
//           kcal: 350,
//           protein: 28,
//           carbs: 30,
//           fats: 12,
//         },
//         {
//           mealtype: "Dinner",
//           name: "Stir-Fried Tofu with Vegetables",
//           ingredients: [
//             "100g Firm Tofu",
//             "50g Bell Peppers",
//             "50g Zucchini",
//             "1 tbsp Soy Sauce",
//             "1 tbsp Sesame Oil",
//           ],
//           instructions: [
//             "Cut tofu and vegetables into bite-sized pieces.",
//             "Heat sesame oil in a pan and stir-fry tofu until golden.",
//             "Add vegetables and soy sauce. Cook until tender.",
//           ],
//           kcal: 300,
//           protein: 15,
//           carbs: 20,
//           fats: 15,
//         },
//       ],
//     },
//   ],
// };
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
