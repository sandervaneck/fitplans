"use client";

import { Dialog, Button, Tabs, Tab, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FormField } from "../Forms/FormField";
import { AccountInput, Contract, Lang, useLoginQuery } from "./Accountapi/api";

interface LoginDialogProps {
  startValue: number;
  id: string | undefined;
  setId: (id: string | undefined) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface LoginTabsProps {
  value: number;
  setValue: (value: number) => void;
}

type LoginForm = {
  username: string;
  password: string;
};

interface LoginFieldProps {
  id: string | undefined;
  setId: (id: string | undefined) => void;
  form: LoginForm;
  setForm: (value: LoginForm) => void;
  setUser: () => void;
}

interface SignUpFieldProps {
  form: AccountInput;
  setForm: (f: AccountInput) => void;
  setId: (a: string | undefined) => void;
}

export const emptyAccountInput: AccountInput = {
  email: "",
  password: "",
  diets: [""],
  username: "",
  contract: Contract.FREE,
  language: Lang.ENGLISH,
};

export const LoginDialog: React.FC<LoginDialogProps> = (props) => {
  const { open, setOpen, id, setId, startValue } = props;
  const [value, setValue] = useState(startValue);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState<AccountInput>(emptyAccountInput);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDialog-paper": {
          width: "300px", // Adjust width as needed
          padding: "16px", // Optional padding for better spacing
        },
      }}
    >
      <Button onClick={() => setOpen(false)}>Close</Button>
      <LoginTabs value={value} setValue={setValue} />
      {value === 0 && (
        <LoginField
          id={id}
          setId={setId}
          form={loginForm}
          setForm={setLoginForm}
          setUser={() => {
            setOpen(false);
          }}
        />
      )}
      {value === 1 && (
        <SignUpField form={signupForm} setForm={setSignupForm} setId={setId} />
      )}
    </Dialog>
  );
};

const LoginTabs: React.FC<LoginTabsProps> = (props) => {
  const { value, setValue } = props;

  return (
    <Tabs value={value} onChange={(e, n) => setValue(n)} centered>
      <Tab
        // icon={<PenAndPaperIcon />}
        label="Log In"
      />
      <Tab
        // icon={<ImageIcon />}
        label="Sign Up"
      />
    </Tabs>
  );
};

const LoginField: React.FC<LoginFieldProps> = (props) => {
  const { form, setForm, setUser, setId } = props;

  const { login, error } = useLoginQuery({
    onCompleted: (r) => {
      if (r && r.login) {
        setUser();
        setId(r.login.id);
      }
    },
    name: form.username,
    password: form.password,
  });

  return (
    <Stack direction={"column"} spacing={2}>
      <FormField
        label="Username or email"
        value={form.username}
        setValue={(e) => setForm({ ...form, username: e })}
      />
      <FormField
        label="Password"
        value={form.password}
        setValue={(e) => setForm({ ...form, password: e })}
      />
      <Button onClick={() => login()}>Log In</Button>
      {error && (
        <Typography variant="body2">
          Credentials not correct. New? Click sign up!
        </Typography>
      )}
    </Stack>
  );
};

const SignUpField: React.FC<SignUpFieldProps> = (props) => {
  const { form, setForm } = props;
  const login = () => {
    console.log(form);
  };
  return (
    <Stack direction={"column"} spacing={2}>
      <FormField
        label="Username"
        value={form.username}
        setValue={(e) => setForm({ ...form, username: e })}
      />
      <FormField
        label="Email"
        value={form.email ? form.email : ""}
        setValue={(e) => setForm({ ...form, email: e })}
      />
      <FormField
        label="Password"
        value={form.password}
        setValue={(e) => setForm({ ...form, password: e })}
      />
      <FormField
        label="Bio"
        value={form.bio ? form.bio : ""}
        setValue={(e) => setForm({ ...form, bio: e })}
      />
      <FormField
        label="Diets (seperate with comma)"
        multiline
        value={form.diets ? String(form.diets) : ""}
        setValue={(e) => setForm({ ...form, diets: e.split(", ") })}
      />
      <FormField
        label="Phone Number"
        value={form.phone ? form.phone : ""}
        setValue={(e) => setForm({ ...form, phone: e })}
      />
      <Button onClick={() => login()}>Sign Up</Button>
    </Stack>
  );
};
