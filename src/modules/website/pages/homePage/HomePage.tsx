import "./HomePage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import CustomContainer from "@components/containers/customContainer/CustomContainer";

const HomePage = () => {
  const { t } = useTranslation(["home"], { nsMode: "fallback" });

  useMount({ documentTitle: t("title") });

  return (
    <PageMotion id="home_page" className="home_page">
      <CustomContainer className="home_page-container">
        <Typography color="primary">HomePage</Typography>
      </CustomContainer>
    </PageMotion>
  );
};

export default HomePage;
