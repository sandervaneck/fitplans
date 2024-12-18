import { Theme, alpha, Components } from "@mui/material/styles";
import { colors } from "./ThemePrimitives";

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations: Components<Theme> = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        backgroundColor: colors.orange[100],
        color: theme.palette.text.primary,
        border: `1px solid ${alpha(colors.orange[300], 0.5)}`,
        "& .MuiAlert-icon": {
          color: colors.orange[500],
        },
        ...theme.applyStyles("dark", {
          backgroundColor: `${alpha(colors.orange[900], 0.5)}`,
          border: `1px solid ${alpha(colors.orange[800], 0.5)}`,
        }),
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "1px solid",
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: colors.gray[200],
        ...theme.applyStyles("dark", {
          backgroundColor: colors.gray[800],
        }),
      }),
    },
  },
};
