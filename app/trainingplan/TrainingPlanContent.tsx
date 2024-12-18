"use client";
import { useMediaQuery, Stack, Card } from "@mui/material";
import { useState } from "react";
import {
  emptyMealInputForm,
  emptyTrainingForm,
} from "../components/emptyForms";
import { NavigateTabs } from "../components/NavigateTabs";
import {
  MealScheduleAnswerType,
  TrainingScheduleAnswerType,
} from "../types/types";
import { RequestTrainingPlanForm } from "../components/RequestForm/RequestTrainingPlanForm";
import { TrainingPlans } from "./TrainingplanCards";

export const TrainingPlanPageContent = () => {
  const [form, setForm] = useState(emptyTrainingForm);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [answer, setAnswer] = useState<TrainingScheduleAnswerType | null>(null);
  const [clientSessionId, setClientSessionId] = useState(crypto.randomUUID());

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
        <NavigateTabs v={1} />
        <RequestTrainingPlanForm
          form={form}
          setForm={setForm}
          answer={answer}
          setAnswer={setAnswer}
          isMobile={isMobile}
        />
      </Card>
      {answer !== null && (
        <TrainingPlans
          plans={answer.trainings}
          preview={true}
          clientSessionId={clientSessionId}
        />
      )}
    </Stack>
  );
};
