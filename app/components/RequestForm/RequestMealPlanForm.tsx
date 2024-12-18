"use client";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { MealFormType, MealScheduleAnswerType } from "@/app/types/types";
import { useState } from "react";
import { callGptMeals } from "@/app/openai/calls";
import { getMealPrompt } from "@/app/openai/functions";
import { InputMealPlanForm } from "./Components/InputMealPlanForm";

interface RequestMealPlanFormProps {
  form: MealFormType;
  setForm: (value: MealFormType) => void;
  isMobile: boolean;
  answer: MealScheduleAnswerType | null;
  setAnswer: (a: MealScheduleAnswerType) => void;
}

export const RequestMealPlanForm: React.FC<RequestMealPlanFormProps> = ({
  form,
  setForm,
  isMobile,
  setAnswer,
}) => {
  const [loading, setLoading] = useState(false);
  const getMyMeal = (form: MealFormType) => {
    const prompt = getMealPrompt(form);
    callGptMeals(
      prompt,
      (a: MealScheduleAnswerType) => {
        setAnswer(a);
      },
      (b: boolean) => setLoading(b)
    );
  };
  return (
    <Stack direction={"column"}>
      <Typography variant="h6" color="white">
        Get a nutrition schedule for my goal:
      </Typography>
      <InputMealPlanForm form={form} setForm={setForm} isMobile={isMobile} />
      <Button variant="contained" onClick={() => getMyMeal(form)}>
        Get my schedule!
      </Button>
      {loading && <CircularProgress />}
    </Stack>
  );
};
