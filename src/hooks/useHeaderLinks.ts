import { ROUTES_PATH } from "@enums/routesPath.enum";
import { useTranslation } from "react-i18next";

const useHeaderLinks = () => {
  const { t } = useTranslation();
  const headerLinks = [{ label: t("pokemon"), to: `/${ROUTES_PATH.pokemon}` }];
  return { headerLinks };
};

export default useHeaderLinks;
