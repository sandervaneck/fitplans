"use client";
import { JSX } from "react";
import AppTheme from "../theme/AppTheme";
import { MealPlanPageContent } from "./MealPlanPageContent";
import { SearchAppBar } from "../components/AppBar";

export default function MealplanPage(): JSX.Element {
  return (
    <AppTheme>
      <SearchAppBar />
      <MealPlanPageContent />
    </AppTheme>
  );
}
