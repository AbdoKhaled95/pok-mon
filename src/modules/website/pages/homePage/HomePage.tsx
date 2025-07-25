import "./HomePage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { m } from "framer-motion";
import {
  primaryTransition,
  toXEndVariant,
  toXStartVariant,
  toYVariant,
} from "@libraries/framerMotion/variants";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import localizedText from "@utils/localizedText";

const HomePage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation(["home"], { nsMode: "fallback" });

  useMount({ documentTitle: t("title") });
  const test = {
    nameAr: "الرئيسية",
    nameEn: "Home",
  };

  return (
    <PageMotion id="home_page" className="home_page">
      <CustomContainer className="home_page-container">
        <Typography color="primary">HomePage</Typography>
        <div>
          <m.h1
            variants={toYVariant}
            initial={"initial"}
            whileInView={"animate"}
            transition={primaryTransition}
            className="home_page-container--title"
          >
            {t("home")}
          </m.h1>
          <m.h1
            variants={toXStartVariant}
            initial={"initial"}
            whileInView={"animate"}
            transition={{ ...primaryTransition, delay: 0.1 }}
            className="home_page-container--title"
          >
            {localizedText({ key: "name", language, obj: test })}
          </m.h1>
          <m.h1
            variants={toXEndVariant}
            initial={"initial"}
            whileInView={"animate"}
            transition={{ ...primaryTransition, delay: 0.2 }}
            className="home_page-container--title"
          >
            {t("home")}
          </m.h1>
          <m.h1
            variants={toYVariant}
            initial={"initial"}
            whileInView={"animate"}
            transition={primaryTransition}
            className="home_page-container--title"
          >
            {t("home")}
          </m.h1>
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default HomePage;
