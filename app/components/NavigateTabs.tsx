"use client";

import { FoodBankRounded, SportsGymnasticsRounded } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

export const NavigateTabs = ({ v }: { v: number }) => {
  const [value, setValue] = useState(v);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab href="/mealplan" icon={<FoodBankRounded />} label="Mealplan" />
      <Tab
        href="/trainingplan"
        icon={<SportsGymnasticsRounded />}
        label="Trainingplan"
      />
    </Tabs>
  );
};
