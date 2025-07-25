import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
type Props = {
  documentTitle: string;
};
const useMount = ({ documentTitle }: Props) => {
  const {
    t,
    i18n: { language, dir },
  } = useTranslation(["general"], { nsMode: "fallback" });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    document.title = `${t("title", { ns: "general" })} | ${documentTitle}`;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return () => setIsMounted(false);
  }, [language, dir()]);

  return { isMounted };
};

export default useMount;
