import { MealFormType, TrainingFormType } from "../types/types";

export const getTrainingPrompt = (form: TrainingFormType): string => {
  return `Provide me with a training schema for someone that has the following requests:
  My current weigth is: ${form.weigth},
  My current age is: ${form.age},
  My goal is: ${form.goal},
  I would like to work out ${form.workouts.numberofworkoutsaweek} times a week,
  I am mostly interested in doing ${form.workouts}.
  
  Please make your answer include an overview for ${form.weeks} weeks, showing which things to do in what location (i.e road/forest/gym), total time, the excercises (for each excercises give the number of reps (i.e 12), number of sets (i.e 4) and the excercise itself (i.e squats) and workout type (i.e weigth lifting) on each workout day.
  `;
};

export const getMealPrompt = (form: MealFormType): string => {
  return `Provide me with a nutrition schema for someone that has the following requests, keeping in mind that to gain weight or muscle, one should eat in a calorie surplus (more than 2500 kcal per day), while cutting means eating in a deficit (below 2500 daily kcal):
  My current weigth is: ${form.weigth},
  My current age is: ${form.age},
  My goal is: ${form.goal},
  For each of the ${form.weeks}, also provide me with a daily mealplan for someone that has the following requests:
  My goal is: ${form.goal},
  I would like to eat ${form.meals.mealsaday} times a day,
  My favorite ingredients are: ${form.meals.favoritefoods} and I do not eat ${form.meals.exclusions} 
  
  Please make your answer include an overview for ${form.weeks} weeks, 
  Where each week shows ${form.meals.mealsaday} meals for each of the seven days, and
  For each meal explain what meal at what moment (mealtype e.g breakfast, snack, dinner, etc), with ingredient and its quantities, recipe instructions and recipe macros.`;
};
