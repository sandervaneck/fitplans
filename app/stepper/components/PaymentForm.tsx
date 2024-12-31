import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import { FormType } from "../Form";
import { FormSelect } from "@/app/components/Forms/FormSelect";
import Grid from "@mui/material/Grid2";
import { FormField } from "@/app/components/Forms/FormField";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

interface InfoProps {
  form: FormType;
  setForm: (f: FormType) => void;
}

export default function PaymentForm({ form, setForm }: InfoProps) {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 6, md: 12 }}>
        <FormLabel htmlFor="first-name" required>
          Years of experience
        </FormLabel>
        <FormSelect
          value={form.experience}
          options={[
            "1 year",
            "2 years",
            "3 years",
            "4 years",
            "5 years",
            "6 years",
            "> 6 years",
          ]}
          setValue={(v) => {
            setForm({ ...form, experience: v });
          }}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6, md: 12 }}>
        <FormLabel htmlFor="first-name" required>
          Describe your level or {getLevelForSport(form.sport)}:
        </FormLabel>
        <FormField
          value={String(form.currentstate)}
          setValue={(v) => {
            setForm({ ...form, currentstate: String(v) });
          }}
        />
      </FormGrid>
      <FormGrid size={12}>
        <FormLabel htmlFor="first-name" required>
          Improve my:
        </FormLabel>
        <FormSelect
          value={form.goal}
          options={getGoalOptionsForSport(form.sport)}
          setValue={(v) => {
            setForm({ ...form, goal: v });
          }}
        />
      </FormGrid>
    </Grid>
  );
}

export function getLevelForSport(sport: string) {
  switch (sport) {
    case "Tennis":
      return "Rating";
    case "Calisthenics":
      return "Best excercise you are able to do";
    default:
      throw new Error("Unknown sport");
  }
}

export function getGoalOptionsForSport(sport: string) {
  switch (sport) {
    case "Tennis":
      return [
        "Courtspeed",
        "Serve speed",
        "Explosive shots",
        "Feetwork",
        "Volleys",
        "Topspin",
        "Endurance",
      ];
    case "Calisthenics":
      return [
        "Muscle ups",
        "Front Lever",
        "Pistol Squat",
        "Planche",
        "Pull ups",
      ];
    default:
      throw new Error("Unknown sport");
  }
}
