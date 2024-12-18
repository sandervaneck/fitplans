"use client";

import { MealFormType } from "@/app/types/types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormField } from "../../Forms/FormField";
import { FormSelect } from "../../Forms/FormSelect";

interface InputMealPlanFormProps {
  form: MealFormType;
  setForm: (value: MealFormType) => void;
  isMobile: boolean;
}

export const InputMealPlanForm: React.FC<InputMealPlanFormProps> = ({
  form,
  setForm,
  isMobile,
}) => {
  return (
    <>
      <Grid container size={12}>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
            label="Age"
            placeholder="i.e 34"
            endAdornment="Years"
            value={String(form.age)}
            setValue={(value) => setForm({ ...form, age: Number(value) })}
          />{" "}
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
            placeholder="i.e 78"
            endAdornment="Kg"
            label="Current weight"
            value={String(form.weigth)}
            setValue={(value) => setForm({ ...form, weigth: Number(value) })}
          />{" "}
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            label="Goal"
            placeholder="i.e bigger biceps"
            value={String(form.goal)}
            setValue={(value) => setForm({ ...form, goal: value })}
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
          />
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormSelect
            label="Number of weeks for your plan"
            endAdornment="Weeks"
            value={String(form.weeks)}
            options={["1", "2", "3", "4", "5", "6"]}
            setValue={(value) => setForm({ ...form, weeks: Number(value) })}
          />{" "}
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            label="Foods to avoid"
            placeholder="i.e nuts, fish, cheese"
            value={String(form.meals.exclusions)}
            endAdornment="in my meals"
            setValue={(value) =>
              setForm({
                ...form,
                meals: {
                  ...form.meals,
                  exclusions: value.split(","),
                },
              })
            }
          />
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            label="Foods to include"
            endAdornment="in my meals"
            placeholder="i.e peanut butter, chicken"
            value={String(form.meals.favoritefoods)}
            setValue={(value) =>
              setForm({
                ...form,
                meals: {
                  ...form.meals,
                  favoritefoods: value.split(","),
                },
              })
            }
          />
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={12}>
          <FormSelect
            label="Number of meals per day"
            place="i.e 4"
            endAdornment="times a day"
            value={String(form.meals.mealsaday)}
            setValue={(value) =>
              setForm({
                ...form,
                meals: {
                  ...form.meals,
                  mealsaday: Number(value),
                },
              })
            }
            options={["1", "2", "3", "4", "5", "6"]}
          />
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
