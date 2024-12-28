import { FormType } from "../stepper/Form";
import { MealFormType, TrainingFormType } from "../types/types";

export const getTennisPrompt = (form: FormType): string => {
  return `
  Please provide a clear schema for the following sports person:
Sports: Tennis. Age: ${form.age}. My weight: ${form.weight}. My experience: ${form.experience}. My level: ${form.currentstate}.
Goal: Improve my ${form.goal} in ${form.plantime} weeks by training ${form.trainings} a week. 
I need a strength & conditioning plan of ${form.trainings} moments a week with a clear explanation of each exercise for ${form.plantime} weeks. Can you provide this for me?`;
};

export const getTrainingPrompt = (form: TrainingFormType): string => {
  return `Provide me with a training schema for someone that has the following requests:
  My current weigth is: ${form.weigth},
  My current age is: ${form.age},
  My goal is: ${form.goal},
  I would like to work out ${form.workouts.numberofworkoutsaweek} times a week,
  I am mostly interested in doing ${form.workouts}.
  
  Please make your answer include an overview for ${form.weeks} weeks, showing which things to do in what location (i.e road/forest/gym), total time, workout type (i.e weigth lifting), and the excercises (for each excercise provide the name and number of repetitions in one strin) on each workout day.
  `;
};

export const getMealPrompt = (form: MealFormType): string => {
  return `
  When someone wants to gain muscle, he should eat in a calorie surplus (over 2500 kcal, 150 g of protein, 200 g of carbs, 90 g of fats a day). 
  When wanting to lose muscle, he should eat in a calorie deficit (1800-2300 kcal, 100-150 g of protein, 150-200 g of carbs, 30-70 g of fats a day).
  Provide me with a nutrition schema for someone that has the following requests, keeping in mind that the total sum of calories, proteins, carbs and fats of all meals in one day are in line with the goal. 
  My current weigth is: ${form.weigth},
  My current age is: ${form.age},
  My goal is: ${form.goal},
  For each of the ${form.weeks}, also provide me with a daily mealplan for someone that has the following requests:
  My goal is: ${form.goal},
  I would like to eat ${form.meals.mealsaday} times a day,
  My favorite ingredients are: ${form.meals.favoritefoods} and I do not eat ${form.meals.exclusions} 
  
  Please make your answer include an overview for 7 days, 
  Where each week shows ${form.meals.mealsaday} meals for each of the seven days, and
  For each meal explain what meal at what moment (mealtype e.g breakfast, snack, dinner, etc, make sure that no two same mealtypes on the same day), with a list of ingredients that also include quantities, recipe instructions and recipe macros.`;
};
