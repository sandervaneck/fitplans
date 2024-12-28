"use client";
import { JSX } from "react";
import AppTheme from "../theme/AppTheme";
import { MealPlanPageContent } from "./MealPlanPageContent";
import { SearchAppBar } from "../components/AppBar";
import { useAuth } from "../components/Authentication/Provider";
import { useMediaQuery } from "@mui/material";

export default function MealplanPage(): JSX.Element {
  const { id, setId } = useAuth();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <AppTheme>
      {/* <Provider> */}
      <SearchAppBar id={id} setId={setId} isMobile={isMobile} />
      <MealPlanPageContent isMobile={isMobile} />
      {/* </Provider> */}
    </AppTheme>
  );
}
