import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LOCALES } from "@enums/locales.enum";
import type { AppTheme } from "@models/theme.model";

import type { Locale } from "@models/general.model";
import { APP_THEMES } from "@enums/themes.enum";

export interface settingsState {
  appTheme: AppTheme;
  locale: Locale;
}

export const settingsStateInitial: settingsState = {
  appTheme: APP_THEMES[0], // Default theme
  locale: LOCALES[0], // Default locale
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: settingsStateInitial,
  reducers: {
    setAppTheme: (state, action: PayloadAction<AppTheme>) => {
      state.appTheme = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload.value);
      document.documentElement.setAttribute("data-mode", action.payload.mode);
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const { setAppTheme, setLocale } = settingsSlice.actions;

export default settingsSlice.reducer;
