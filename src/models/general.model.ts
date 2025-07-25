import type { Direction } from "@mui/material";
export type Language = "en" | "ar";

export type Locale = {
  language: Language;
  label: string;
  countryCode: string;
  adapterLocale: string;
  currency: string;
  flag: string;
  direction: Direction;
  phoneCode: string;
};
