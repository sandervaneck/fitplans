import { FC } from "react";
import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";

interface PageProps {
  params: {
    clientSessionId: string;
  };
}

// Next.js page component for the route
const TrainingPlanPage = ({ params }: PageProps) => {
  const { clientSessionId } = params;

  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default TrainingPlanPage;
