import type {
  BreakpointsOptions,
  Components,
  CssVarsTheme,
  Theme,
} from "@mui/material";

export const components:
  | Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>
  | undefined = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        // Add other styles you want to override here
      },
    },
  },
};
export const breakpoints: BreakpointsOptions | undefined = {
  values: {
    xs: 0, // extra small devices
    sm: 600, // small devices
    md: 900, // medium devices
    lg: 1200, // large devices
    xl: 1536, // extra-large devices
    xxl: 1920, // extra-extra-large devices
  },
};
