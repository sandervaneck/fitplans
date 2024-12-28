import { zodResponseFormat } from "openai/helpers/zod";
import { openai } from "./openai";
import {
  MealScheduleAnswerType,
  TrainingScheduleAnswerType,
} from "../types/types";
import { MealOutput, TrainingOutput } from "../components/emptyForms";

export const callTrainingGpt = async (
  prompt: string,
  action: (a: TrainingScheduleAnswerType) => void,
  setIsLoading: (a: boolean) => void
) => {
  setIsLoading(true); // Start loading

  try {
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "Extract training schedule." },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(TrainingOutput, "trainings"),
      max_completion_tokens: 8812,
    });

    const answer: TrainingScheduleAnswerType | null =
      completion.choices[0].message.parsed;

    if (!answer) {
      throw new Error("Received an empty response from ChatGPT.");
    }
    action(answer);
  } catch (error) {
    console.error("Error while processing the recipe:", error);
  } finally {
    setIsLoading(false);
  }
};

export const callGptMeals = async (
  prompt: string,
  action: (a: MealScheduleAnswerType) => void,
  setIsLoading: (a: boolean) => void
) => {
  setIsLoading(true); // Start loading

  try {
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "Extract mealplan." },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(MealOutput, "meals"),
      max_completion_tokens: 8812,
    });

    const answer: MealScheduleAnswerType | null =
      completion.choices[0].message.parsed;

    if (!answer) {
      throw new Error("Received an empty response from ChatGPT.");
    }

    action(answer);
  } catch (error) {
    console.error("Error while processing the recipe:", error);
  } finally {
    setIsLoading(false);
  }
};
