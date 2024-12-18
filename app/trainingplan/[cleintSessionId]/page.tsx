import { FC } from "react";
import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";

interface MealPlanPageProps {
  params: {
    clientSessionId: string;
  };
}

const TrainingPlanPage: FC<MealPlanPageProps> = async ({ params }) => {
  const clientSessionId = params.clientSessionId;

  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default TrainingPlanPage;
