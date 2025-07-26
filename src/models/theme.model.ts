export type PalateMode = "light" | "dark";
export type appThemeValue = "light" | "dark";
export type AppTheme = {
  name: string;
  mode: PalateMode;
  value: appThemeValue;
};
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
  interface TypeBackground {
    overlay: string;
    pageControl: string;
    loadMore: string;
    cover: string;
    infoCardHead: string;
    details: string;
  }
  interface TypeText {
    third: string;
  }
  interface PaletteOptions {
    border?: {
      primary: string;
    };
  }
}
