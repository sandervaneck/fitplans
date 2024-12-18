"use client";
import {
  Button,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  TrainingFormType,
  TrainingScheduleAnswerType,
} from "@/app/types/types";
import { useState } from "react";
import { getTrainingPrompt } from "@/app/openai/functions";
import { callTrainingGpt } from "@/app/openai/calls";
import { InputTrainingPlanForm } from "./Components/InputTrainingPlanForm";

interface RequestTrainingPlanFormProps {
  form: TrainingFormType;
  setForm: (value: TrainingFormType) => void;
  isMobile: boolean;
  answer: TrainingScheduleAnswerType | null;
  setAnswer: (a: TrainingScheduleAnswerType) => void;
}

export const RequestTrainingPlanForm: React.FC<
  RequestTrainingPlanFormProps
> = ({ form, setForm, isMobile, answer, setAnswer }) => {
  const [loading, setLoading] = useState(false);
  const getMyTrainings = (form: TrainingFormType) => {
    const prompt = getTrainingPrompt(form);
    callTrainingGpt(
      prompt,
      (a: any) => {
        setAnswer(a);
      },
      (b: boolean) => setLoading(b)
    );
  };
  return (
    <Stack direction={"column"}>
      <Typography variant="h6" color="white">
        Get a training schedule for my goal:
      </Typography>
      <InputTrainingPlanForm
        form={form}
        setForm={setForm}
        isMobile={isMobile}
      />
      <Button variant="contained" onClick={() => getMyTrainings(form)}>
        Get my schedule!
      </Button>
      {loading && <CircularProgress />}
    </Stack>
  );
};
