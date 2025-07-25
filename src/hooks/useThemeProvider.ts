import { useMemo } from "react";
import { theme as muiTheme } from "@libraries/mui/theme.mui";
import { type AppDispatch, type RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAppTheme } from "@store/slices/settingsSlice";
import { APP_THEMES } from "@enums/themes.enum";

const useThemeProvider = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    appTheme: { value, mode },
    locale,
  } = useSelector((state: RootState) => state.settings);

  // Memoize the current theme based on themeName
  const theme = useMemo(() => {
    document.documentElement.setAttribute("data-theme", value);
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.dir = locale.direction;
    const currentTheme = muiTheme({
      theme: value,
      mode: mode,
    });
    return currentTheme;
  }, [value, mode]);

  const toggleTheme = () => {
    const otherTheme = APP_THEMES.find((theme) => theme.value !== value);
    dispatch(setAppTheme(otherTheme!));
    document.documentElement.setAttribute("data-theme", otherTheme!.value);
    document.documentElement.setAttribute("data-mode", otherTheme!.mode);
  };

  return { theme, toggleTheme };
};
export default useThemeProvider;
