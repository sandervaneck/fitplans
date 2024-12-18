"use client";

import { JSX } from "react";
import AppTheme from "../theme/AppTheme";
import { CssBaseline } from "@mui/material";
import { SearchAppBar } from "../components/AppBar";
import { TrainingPlanPageContent } from "./TrainingPlanContent";

export default function TrainingplanPage(): JSX.Element {
  return (
    <AppTheme>
      <CssBaseline />
      <SearchAppBar />
      <TrainingPlanPageContent />
    </AppTheme>
  );
}
