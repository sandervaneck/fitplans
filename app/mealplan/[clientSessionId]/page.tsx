// app/mealplan/[clientSessionId]/page.tsx

import { FC } from "react";
import { MealPlanRenderdPage } from "./components/MealPlanRenderdPage";

interface MealPlanPageProps {
  clientSessionId: string;
}
const MealPlanPage: FC<MealPlanPageProps> = ({ clientSessionId }) => {
  return (
    <div>
      <MealPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default MealPlanPage;
