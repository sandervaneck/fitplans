export type TrainingScheduleAnswerType = {
  trainings: TrainingsPerWeekType[];
};

export type MealScheduleAnswerType = {
  meals: MealsPerWeek[];
};
export type MealsPerWeek = {
  week: number;
  monday: Meal[];
  tuesday: Meal[];
  wednesday: Meal[];
  thursday: Meal[];
  friday: Meal[];
  saturday: Meal[];
  sunday: Meal[];
};

export type Meal = {
  mealtype: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  kcal: number;
  protein: number;
  carbs: number;
  fats: number;
};
export type TrainingsPerWeekType = {
  week: number;
  trainings: TrainingType[];
};
export type TrainingType = {
  number: number;
  totaltime: number;
  location: string;
  workouttype: string;
  excercises: Excercise[];
  resttime: number;
};

export type Excercise = {
  title: string;
  instructions: string;
};

export type TrainingFormType = {
  age: number;
  weigth: number;
  goal: string;
  weeks: number;
  workouts: {
    numberofworkoutsaweek: number;
    workouts: string[];
  };
};

export type MealFormType = {
  age: number;
  weigth: number;
  goal: string;
  weeks: number;
  meals: {
    mealsaday: number;
    exclusions: string[];
    favoritefoods: string[];
  };
};
