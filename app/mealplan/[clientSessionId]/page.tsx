// app/mealplan/[clientSessionId]/page.tsx

import { MealPlanRenderdPage } from "./components/MealPlanRenderdPage";

interface PageProps {
  params: Promise<{
    clientSessionId: string;
  }>;
}

export default async function MealPlanPage({ params }: PageProps) {
  // Await params if needed (Next.js requires this in some cases)
  const { clientSessionId } = await params; // Ensure params is awaited if Next.js expects it

  return (
    <div>
      <MealPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
}
