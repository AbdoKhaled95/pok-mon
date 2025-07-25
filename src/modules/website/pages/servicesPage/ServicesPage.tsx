import "./ServicesPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
const ServicesPage = () => {
  const { t } = useTranslation(["services"], { nsMode: "fallback" });
  useMount({ documentTitle: t("title") });

  return (
    <PageMotion id="services_page" className="services_page">
      <CustomContainer className="services_page-container">
        <h1>services_page</h1>
      </CustomContainer>
    </PageMotion>
  );
};

export default ServicesPage;
