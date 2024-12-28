"use client";

import { TrainingFormType } from "@/app/types/types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormField } from "../../Forms/FormField";
import { FormSelect, FormSelectMultiple } from "../../Forms/FormSelect";

interface InputTrainingPlanFormProps {
  form: TrainingFormType;
  setForm: (value: TrainingFormType) => void;
  isMobile: boolean;
}

export const InputSportPlanForm: React.FC<InputTrainingPlanFormProps> = ({
  form,
  setForm,
  isMobile,
}) => {
  return (
    <>
      <Grid container size={12}>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            label="Age"
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
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
            label="Current weight"
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
            placeholder="i.e 78"
            endAdornment="Kg"
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
          <FormSelect
            label="Sport"
            value={String(form.workouts.workouts)}
            setValue={(value) =>
              setForm({
                ...form,
                workouts: { ...form.workouts, workouts: value.split(",") },
              })
            }
            options={["Tennis", "Calisthenics"]}
          />{" "}
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormSelect
            label="Current level"
            value={form.goal}
            setValue={(value) =>
              setForm({
                ...form,
                goal: String(value),
              })
            }
            options={
              form.workouts.workouts.includes("Tennis")
                ? ["Rating 3", "Rating 4", "Rating 5"]
                : [
                    "Can do Muscle Up",
                    "Can do Front Lever",
                    "Can do Human Flag",
                    "Can do Pistol Squat",
                  ]
            }
          />{" "}
          <Box
            sx={{
              borderBottom: "1px solid #000",
              marginTop: 1,
            }}
          />
        </Grid>
        <Grid size={isMobile ? 12 : 6}>
          <FormSelectMultiple
            label="Goal"
            value={String(form.goal).split(",")}
            handleChange={(value) =>
              setForm({
                ...form,
                goal: String(value),
              })
            }
            options={
              form.workouts.workouts.includes("Tennis")
                ? ["Feetwork", "Endurance", "Explosive strength"]
                : ["Muscle Up", "Front Lever", "Human Flag", "Pistol Squat"]
            }
          />{" "}
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
export const InputTrainingPlanForm: React.FC<InputTrainingPlanFormProps> = ({
  form,
  setForm,
  isMobile,
}) => {
  return (
    <>
      <Grid container size={12}>
        <Grid size={isMobile ? 12 : 6}>
          <FormField
            label="Age"
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
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
            label="Current weight"
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
            placeholder="i.e 78"
            endAdornment="Kg"
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
          <FormSelectMultiple
            label="Sports you would like to do"
            style={{
              flex: 1, // Ensures the form field doesn't break the line
              minWidth: "200px", // Optional: Controls the minimum width
            }}
            value={form.workouts.workouts}
            options={[
              "weight lifting",
              "Running",
              "Bodyweigths",
              "Football",
              "Biking",
              "Swimming",
              "Tennis",
            ]}
            handleChange={(o) =>
              o.target.value &&
              setForm({
                ...form,
                workouts: {
                  ...form.workouts,
                  workouts:
                    typeof o.target.value === "string"
                      ? [o.target.value]
                      : o.target.value,
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
          <FormSelect
            label="Number of trainings per week"
            options={["1", "2", "3", "4", "5", "6"]}
            value={String(form.workouts.numberofworkoutsaweek)}
            setValue={(value) =>
              setForm({
                ...form,
                workouts: {
                  ...form.workouts,
                  numberofworkoutsaweek: Number(value),
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
      </Grid>
    </>
  );
};
