"use client";
import { InputAdornment, InputLabel, TextField } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";

interface FormFieldProps {
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
  label?: string;
  multiline?: boolean;
  placeholder?: string;
  endAdornment?: string;
  startAdornment?: string;
  style?: CSSProperties | undefined;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    endAdornment,
    placeholder,
    required,
    value,
    setValue,
    label,
    multiline,
    startAdornment,
    style,
  } = props;

  return (
    <>
      {label && <InputLabel variant="standard">{label}</InputLabel>}
      <TextField
        style={style}
        error={(required && value === "") || (required && value === String(0))}
        helperText={
          (required && value === "") ||
          (required && value === String(0) && "Fill in")
        }
        placeholder={placeholder}
        type={
          label === "Password"
            ? "password"
            : label === "Email"
            ? "email"
            : label === "Phone Number"
            ? "tel"
            : "text"
        }
        multiline={multiline}
        sx={{ height: 0.5 }}
        size="small"
        margin="dense"
        required
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        autoFocus
        slotProps={{
          input:
            endAdornment || startAdornment
              ? {
                  startAdornment: startAdornment ? (
                    <InputAdornment position="start">
                      {startAdornment}
                    </InputAdornment>
                  ) : undefined,
                  endAdornment: endAdornment ? (
                    <InputAdornment position="end">
                      {endAdornment}
                    </InputAdornment>
                  ) : undefined,
                }
              : undefined,
        }}
      />
    </>
  );
};
