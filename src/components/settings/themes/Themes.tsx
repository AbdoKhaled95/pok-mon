import useThemeProvider from "@hooks/useThemeProvider";
import "./Themes.scss";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { useTranslation } from "react-i18next";

const Themes = () => {
  const { toggleTheme } = useThemeProvider(); // Use the custom hook to get the toggle function
  const {
    appTheme: { name },
  } = useSelector((state: RootState) => state.settings);
  const { t } = useTranslation();

  return (
    <Button className="themes" variant="contained" onClick={toggleTheme}>
      {t(name, { ns: "general" })}
    </Button>
  );
};

export default Themes;
