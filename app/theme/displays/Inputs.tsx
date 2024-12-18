import { alpha, Theme, Components } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import { colors } from "./ThemePrimitives";

/* eslint-disable import/prefer-default-export */
export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px",
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
              padding: "8px 12px",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem", // 40px
            },
          },
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: colors.gray[900],
              backgroundImage: `linear-gradient(to bottom, ${colors.gray[700]}, ${colors.gray[800]})`,
              boxShadow: `inset 0 1px 0 ${colors.gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
              border: `1px solid ${colors.gray[700]}`,
              "&:hover": {
                backgroundImage: "none",
                backgroundColor: colors.gray[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: colors.gray[800],
              },
              ...theme.applyStyles("dark", {
                color: "black",
                backgroundColor: colors.gray[50],
                backgroundImage: `linear-gradient(to bottom, ${colors.gray[100]}, ${colors.gray[50]})`,
                boxShadow: "inset 0 -1px 0  hsl(220, 30%, 80%)",
                border: `1px solid ${colors.gray[50]}`,
                "&:hover": {
                  backgroundImage: "none",
                  backgroundColor: colors.gray[300],
                  boxShadow: "none",
                },
                "&:active": {
                  backgroundColor: colors.gray[400],
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: colors.brand[300],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                colors.brand[400],
                0.8
              )}, ${colors.brand[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                colors.brand[200],
                0.2
              )}, inset 0 -2px 0 ${alpha(colors.brand[700], 0.4)}`,
              border: `1px solid ${colors.brand[500]}`,
              "&:hover": {
                backgroundColor: colors.brand[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: colors.brand[700],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              variant: "outlined",
            },
            style: {
              color: theme.palette.text.primary,
              border: "1px solid",
              borderColor: colors.gray[200],
              backgroundColor: alpha(colors.gray[50], 0.3),
              "&:hover": {
                backgroundColor: colors.gray[100],
                borderColor: colors.gray[300],
              },
              "&:active": {
                backgroundColor: colors.gray[200],
              },
              ...theme.applyStyles("dark", {
                backgroundColor: colors.gray[800],
                borderColor: colors.gray[700],

                "&:hover": {
                  backgroundColor: colors.gray[900],
                  borderColor: colors.gray[600],
                },
                "&:active": {
                  backgroundColor: colors.gray[900],
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: colors.brand[700],
              border: "1px solid",
              borderColor: colors.brand[200],
              backgroundColor: colors.brand[50],
              "&:hover": {
                backgroundColor: colors.brand[100],
                borderColor: colors.brand[400],
              },
              "&:active": {
                backgroundColor: alpha(colors.brand[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: colors.brand[50],
                border: "1px solid",
                borderColor: colors.brand[900],
                backgroundColor: alpha(colors.brand[900], 0.3),
                "&:hover": {
                  borderColor: colors.brand[700],
                  backgroundColor: alpha(colors.brand[900], 0.6),
                },
                "&:active": {
                  backgroundColor: alpha(colors.brand[900], 0.5),
                },
              }),
            },
          },
          {
            props: {
              variant: "text",
            },
            style: {
              color: colors.gray[600],
              "&:hover": {
                backgroundColor: colors.gray[100],
              },
              "&:active": {
                backgroundColor: colors.gray[200],
              },
              ...theme.applyStyles("dark", {
                color: colors.gray[50],
                "&:hover": {
                  backgroundColor: colors.gray[700],
                },
                "&:active": {
                  backgroundColor: alpha(colors.gray[700], 0.7),
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "text",
            },
            style: {
              color: colors.brand[700],
              "&:hover": {
                backgroundColor: alpha(colors.brand[100], 0.5),
              },
              "&:active": {
                backgroundColor: alpha(colors.brand[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: colors.brand[100],
                "&:hover": {
                  backgroundColor: alpha(colors.brand[900], 0.5),
                },
                "&:active": {
                  backgroundColor: alpha(colors.brand[900], 0.3),
                },
              }),
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: theme.palette.text.primary,
        border: "1px solid ",
        borderColor: colors.gray[200],
        backgroundColor: alpha(colors.gray[50], 0.3),
        "&:hover": {
          backgroundColor: colors.gray[100],
          borderColor: colors.gray[300],
        },
        "&:active": {
          backgroundColor: colors.gray[200],
        },
        ...theme.applyStyles("dark", {
          backgroundColor: colors.gray[800],
          borderColor: colors.gray[700],
          "&:hover": {
            backgroundColor: colors.gray[900],
            borderColor: colors.gray[600],
          },
          "&:active": {
            backgroundColor: colors.gray[900],
          },
        }),
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: "0.25rem",
              [`& .${svgIconClasses.root}`]: { fontSize: "1rem" },
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              width: "2.5rem",
              height: "2.5rem",
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "10px",
        boxShadow: `0 4px 16px ${alpha(colors.gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: colors.brand[500],
        },
        ...theme.applyStyles("dark", {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: "#fff",
          },
          boxShadow: `0 4px 16px ${alpha(colors.brand[700], 0.5)}`,
        }),
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px 16px",
        textTransform: "none",
        borderRadius: "10px",
        fontWeight: 500,
        ...theme.applyStyles("dark", {
          color: colors.gray[400],
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
          [`&.${toggleButtonClasses.selected}`]: {
            color: colors.brand[300],
          },
        }),
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: "1px solid ",
        borderColor: alpha(colors.gray[300], 0.8),
        boxShadow: "0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset",
        backgroundColor: alpha(colors.gray[100], 0.4),
        transition: "border-color, background-color, 120ms ease-in",
        "&:hover": {
          borderColor: colors.brand[300],
        },
        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(colors.brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: colors.brand[400],
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: colors.brand[500],
          borderColor: colors.brand[500],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: colors.brand[600],
          },
        },
        ...theme.applyStyles("dark", {
          borderColor: alpha(colors.gray[700], 0.8),
          boxShadow: "0 0 0 1.5px hsl(210, 0%, 0%) inset",
          backgroundColor: alpha(colors.gray[900], 0.8),
          "&:hover": {
            borderColor: colors.brand[300],
          },
          "&.Mui-focusVisible": {
            borderColor: colors.brand[400],
            outline: `3px solid ${alpha(colors.brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "none",
      },
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: colors.gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: "8px 12px",
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: "border 120ms ease-in",
        "&:hover": {
          borderColor: colors.gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(colors.brand[500], 0.5)}`,
          borderColor: colors.brand[400],
        },
        ...theme.applyStyles("dark", {
          "&:hover": {
            borderColor: colors.gray[500],
          },
        }),
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem",
            },
          },
        ],
      }),
      notchedOutline: {
        border: "none",
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[400],
        }),
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
};
