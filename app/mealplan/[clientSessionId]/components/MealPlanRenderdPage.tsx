"use client";

import { FC, useEffect, useState } from "react";
import { MealsPerWeek } from "@/app/types/types";
import { MealPlans } from "../../MealplanCards";
import { SearchAppBar } from "@/app/components/AppBar";

export interface MealPlanPageProps {
  clientSessionId: string;
}

export const MealPlanRenderdPage: FC<MealPlanPageProps> = ({
  clientSessionId,
}) => {
  const [mealPlan, setMealPlan] = useState<MealsPerWeek[] | null>(null);

  // Dynamically access the clientSessionId from params

  // This effect runs only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("mealPlanAnswer");
      if (result) {
        setMealPlan(JSON.parse(result)); // Update the state with the meal plan data
      }
    }
  }, []); // This runs once after the component mounts (client-side)
  // Render the page with a loading state initially, then the actual data when it's available
  if (mealPlan === null) {
    return <div>Loading meal plan...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      {mealPlan && (
        <MealPlans
          plans={mealPlan}
          clientSessionId={clientSessionId}
          preview={false}
        />
      )}
    </div>
  );
};
