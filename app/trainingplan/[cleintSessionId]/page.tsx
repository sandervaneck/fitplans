import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";

interface PageProps {
  params: {
    clientSessionId: string;
  };
}

export default async function TrainingPlanPage({ params }: PageProps) {
  if (!params?.clientSessionId) {
    return <div>Error: Missing client session ID</div>;
  }

  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={params.clientSessionId} />
    </div>
  );
}
