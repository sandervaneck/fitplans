"use client";
import { useMediaQuery, Stack, Card } from "@mui/material";
import { useState } from "react";
import { emptyMealInputForm } from "../components/emptyForms";
import { NavigateTabs } from "../components/NavigateTabs";
import { RequestMealPlanForm } from "../components/RequestForm/RequestMealPlanForm";
import { MealScheduleAnswerType } from "../types/types";
import { MealPlans } from "./MealplanCards";

export const MealPlanPageContent = () => {
  const [form, setForm] = useState(emptyMealInputForm);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [answer, setAnswer] = useState<MealScheduleAnswerType | null>(null);
  const clientSessionId = crypto.randomUUID();

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
      {answer !== null && (
        <MealPlans
          plans={answer.meals}
          preview={true}
          clientSessionId={clientSessionId}
        />
      )}
    </Stack>
  );
};
