import * as React from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { FormType } from "../Form";
import { FormSelect } from "@/app/components/Forms/FormSelect";

interface InfoProps {
  form: FormType;
  setForm: (f: FormType) => void;
}

export default function Review({ form, setForm }: InfoProps) {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Practices per week:" />
          <FormSelect
            value={String(form.trainings)}
            options={["1", "2", "3", "4", "5", "6", ">6"]}
            setValue={(v) => {
              setForm({ ...form, trainings: Number(v) });
            }}
          />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Number of weeks:" />
          <FormSelect
            value={String(form.plantime)}
            options={["1", "2", "3", "4", "5", "6"]}
            setValue={(v) => {
              setForm({ ...form, plantime: Number(v) });
            }}
          />
        </ListItem>
      </List>
      <Divider />
    </Stack>
  );
}
