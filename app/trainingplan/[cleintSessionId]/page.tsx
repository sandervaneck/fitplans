import { FC } from "react";
import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";
import { MealPlanPageProps } from "@/app/mealplan/[clientSessionId]/components/MealPlanRenderdPage";

const TrainingPlanPage: FC<MealPlanPageProps> = async ({ clientSessionId }) => {
  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default TrainingPlanPage;
