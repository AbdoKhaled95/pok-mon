import "./AboutPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
const AboutPage = () => {
  const { t } = useTranslation(["about"], { nsMode: "fallback" });
  useMount({ documentTitle: t("title") });

  return (
    <PageMotion id="about_page" className="about_page">
      <CustomContainer className="about_page-container">
        <h1>AboutPage</h1>
      </CustomContainer>
    </PageMotion>
  );
};

export default AboutPage;
