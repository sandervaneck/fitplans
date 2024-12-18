"use client";
import {
  Box,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface FormSelectProps {
  endAdornment?: string;
  error?: boolean;
  fw?: boolean;
  mt?: number;
  place?: string;
  label?: string;
  value: string;
  options: string[];
  setValue: (value: string) => void;
}
export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  error,
  value,
  options,
  setValue,
  place,
  fw,
  mt,
}) => {
  return (
    <>
      {label && (
        <Box sx={{ mb: 1 }}>
          <InputLabel variant="standard">{label}</InputLabel>
        </Box>
      )}
      <Select
        error={error}
        sx={{ height: 0.5, mt: mt, minWidth: 0.3, borderRadius: 28 }}
        size="small"
        fullWidth={fw}
        margin="dense"
        defaultValue={place}
        value={value}
        name={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export const FormSelectMultiple = ({
  options,
  handleChange,
  value,
  label,
  style,
}: {
  style?: any;
  value: string[];
  options: string[];
  handleChange: (e: SelectChangeEvent<string[]>) => void;
  label?: string;
}) => {
  return (
    <>
      {label && (
        <>
          <InputLabel>{label}</InputLabel>
        </>
      )}
      <Select
        style={style}
        multiline
        fullWidth
        sx={{ maxWidth: 100 }}
        size="small"
        margin="dense"
        multiple
        value={value}
        onChange={(e) => handleChange(e)}
        renderValue={(selected) => selected.join(", ")}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
