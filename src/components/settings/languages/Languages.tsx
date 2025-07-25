import { useTranslation } from "react-i18next";
import "./Languages.scss";
import { useDispatch } from "react-redux";
import { setLocale } from "@store/slices/settingsSlice";
import { Button } from "@mui/material";
import { LOCALES } from "@enums/locales.enum";
import { type Locale } from "@models/general.model";
const Languages = () => {
  const dispatch = useDispatch();
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const handleChange = (newLanguage: Locale) =>
    changeLanguage(newLanguage.language, () => {
      dispatch(setLocale(newLanguage));
      document.documentElement.dir = newLanguage.direction;
      document.documentElement.lang = newLanguage.language;
    });

  const otherLanguage = LOCALES.find((lang) => lang.language !== language);

  return (
    <Button
      key={otherLanguage?.language}
      onClick={() => handleChange(otherLanguage!)}
      variant="contained"
      className={`languages ${otherLanguage?.language}`}
    >
      {otherLanguage?.label}
      <img src={otherLanguage?.flag} alt={otherLanguage?.label} />
    </Button>
  );
};

export default Languages;
