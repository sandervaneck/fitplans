import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { FormType } from "../Form";
import { Button } from "@mui/material";

const products = (form: FormType) => [
  {
    name: "Age",
    desc: "Monthly subscription",
    price: form.age,
  },
  {
    name: "Weight",
    desc: "Included in the Professional plan",
    price: form.weight,
  },
  {
    name: "Experience",
    desc: "Devices needed for development",
    price: form.experience,
  },
  {
    name: "Current State",
    desc: "Devices needed for development",
    price: form.currentstate,
  },
  {
    name: "Trainings per week",
    desc: "License",
    price: form.trainings,
  },
  {
    name: "Number of weeks",
    desc: "License",
    price: form.plantime,
  },
  {
    name: "Improve my",
    desc: "License",
    price: form.goal,
  },
];

interface InfoProps {
  form: FormType;
  getMyTrainings: (form: FormType) => void;
}

export default function Info({ form, getMyTrainings }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Sport
      </Typography>
      <Typography variant="h4" gutterBottom>
        {form.sport}
      </Typography>
      <List disablePadding>
        {products(form).map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              //   secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={() => getMyTrainings(form)}>
        Get your Plan!
      </Button>
    </React.Fragment>
  );
}
