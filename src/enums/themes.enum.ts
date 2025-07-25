import type { AppTheme } from "@models/theme.model";

export const APP_THEMES: AppTheme[] = [
  {
    name: "light",
    mode: "light",
    value: "light",
  },
  {
    name: "dark",
    mode: "dark",
    value: "dark",
  },
];
export const PALETTE_COLORS = {
  TEXT_PRIMARY: {
    light: "#000",
    dark: "#fff",
  },
  BACKGROUND_DEFAULT: {
    light: "#fff",
    dark: "#121212",
  },
  BACKGROUND_OVERLAY: {
    light: "rgba(0, 0, 0, 0.5)",
    dark: "rgba(255, 255, 255, 0.08)",
  },
  BACKGROUND_PAGE_CONTROL: {
    light: "#edf3ff",
    dark: "#edf3ff",
  },
  BACKGROUND_LOAD_MORE: {
    light: "#edfdf3",
    dark: "#edfdf3",
  },
  BORDER_PRIMARY: {
    light: "#3eb6ae",
    dark: "#3eb6ae",
  },
  ACTION_HOVER: {
    light: "rgba(0, 0, 0, 0.04)",
    dark: "rgba(255, 255, 255, 0.08)",
  },
};
