import { FC } from "react";
import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";

interface TrainingPlanPageProps {
  clientSessionId: string;
}
const TrainingPlanPage: FC<TrainingPlanPageProps> = async ({
  clientSessionId,
}) => {
  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default TrainingPlanPage;
