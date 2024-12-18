// app/mealplan/[clientSessionId]/page.tsx

import { MealPlanRenderdPage } from "./components/MealPlanRenderdPage";

interface PageProps {
  params: {
    clientSessionId: string;
  };
}

// Next.js page component for the route
const MealPlanPage = ({ params }: PageProps) => {
  const { clientSessionId } = params;

  return (
    <div>
      <MealPlanRenderdPage clientSessionId={clientSessionId} />
    </div>
  );
};

export default MealPlanPage;
