import * as React from "react";

import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import { FormSelect } from "@/app/components/Forms/FormSelect";
import { FormType } from "../Form";
import { FormField } from "@/app/components/Forms/FormField";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

interface InfoProps {
  form: FormType;
  setForm: (f: FormType) => void;
}

export default function AddressForm({ form, setForm }: InfoProps) {
  return (
    <Grid container spacing={3}>
      <FormGrid size={12}>
        <FormLabel htmlFor="first-name" required>
          Sport
        </FormLabel>
        <FormSelect
          value={form.sport}
          options={["Tennis"]}
          setValue={(v) => {
            setForm({ ...form, sport: v });
          }}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Age
        </FormLabel>
        <FormField
          value={String(form.age)}
          setValue={(v) => {
            setForm({ ...form, age: Number(v) });
          }}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Weight
        </FormLabel>
        <FormField
          value={String(form.weight)}
          endAdornment="Kg"
          setValue={(v) => {
            setForm({ ...form, weight: Number(v) });
          }}
        />
      </FormGrid>
    </Grid>
  );
}
