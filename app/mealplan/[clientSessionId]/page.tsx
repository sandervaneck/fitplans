// app/mealplan/[clientSessionId]/page.tsx

import { MealPlanRenderdPage } from "./components/MealPlanRenderdPage";

interface PageProps {
  params: {
    clientSessionId: string;
  };
}

export default async function MealPlanPage({ params }: PageProps) {
  if (!params?.clientSessionId) {
    return <div>Error: Missing client session ID</div>;
  }

  return (
    <div>
      <MealPlanRenderdPage clientSessionId={params.clientSessionId} />
    </div>
  );
}
