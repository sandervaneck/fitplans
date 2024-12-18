// app/mealplan/[clientSessionId]/page.tsx

import { FC } from "react";
import { MealPlanRenderdPage } from "./components/MealPlanRenderdPage";

interface MealPlanPageProps {
  params: {
    clientSessionId: string;
  };
}

const MealPlanPage: FC<MealPlanPageProps> = ({ params }) => {
  const { clientSessionId } = params; // Access params directly without await

  return (
    <div>
      <MealPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default MealPlanPage;
