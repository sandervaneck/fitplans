"use client";

import { FC, useEffect, useState } from "react";
import { TrainingsPerWeekType } from "@/app/types/types";
import { SearchAppBar } from "@/app/components/AppBar";
import { TrainingPlans } from "../../TrainingplanCards";

interface TrainingPlanPageProps {
  clientSessionId: string;
}

export const TrainingPlanRenderdPage: FC<TrainingPlanPageProps> = ({
  clientSessionId,
}) => {
  const [trainingPlan, setTrainingPlan] = useState<
    TrainingsPerWeekType[] | null
  >(null);

  // Dynamically access the clientSessionId from params

  // This effect runs only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("trainingPlanAnswer");
      console.log(result);
      if (result) {
        setTrainingPlan(JSON.parse(result)); // Update the state with the meal plan data
      }
    }
  }, []); // This runs once after the component mounts (client-side)
  // Render the page with a loading state initially, then the actual data when it's available
  if (trainingPlan === null) {
    return <div>Loading training plan...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      {trainingPlan && (
        <TrainingPlans
          plans={trainingPlan}
          clientSessionId={clientSessionId}
          preview={false}
        />
      )}
    </div>
  );
};
