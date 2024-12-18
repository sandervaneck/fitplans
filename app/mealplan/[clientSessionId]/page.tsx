// app/mealplan/[clientSessionId]/page.tsx

import { FC } from "react";
import {
  MealPlanPageProps,
  MealPlanRenderdPage,
} from "./components/MealPlanRenderdPage";

const MealPlanPage: FC<MealPlanPageProps> = ({ clientSessionId }) => {
  return (
    <div>
      <MealPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default MealPlanPage;
