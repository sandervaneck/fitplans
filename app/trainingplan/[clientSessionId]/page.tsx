import { TrainingPlanRenderdPage } from "./components/TrainingPlanRenderdPage";

interface PageProps {
  params: Promise<{
    clientSessionId: string;
  }>;
}

export default async function TrainingPlanPage({ params }: PageProps) {
  const { clientSessionId } = await params; // Ensure params is awaited if Next.js expects it

  return (
    <div>
      <TrainingPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
}
