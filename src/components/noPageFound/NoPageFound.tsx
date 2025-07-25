import { useNavigate } from "react-router-dom";
import "./NoPageFound.scss";
import useMount from "@hooks/useMount";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import { Button, Typography } from "@mui/material";

const NoPageFound = () => {
  const { t } = useTranslation(["general"], { nsMode: "fallback" });
  useMount({
    documentTitle: t("notFound.title"),
  });

  const navigate = useNavigate();
  const handleGoHome = () => navigate(`/${ROUTES_PATH.HOME}`);

  return (
    <PageMotion id="no_page_found" className="">
      <CustomContainer>
        <div className="flex flex-column align-center gap-1r no_page_found">
          <Typography variant="h5" className="no_page_found-title">
            {t("notFound.title")}
          </Typography>
          <Typography className="no_page_found-description">
            {t("notFound.description")}
          </Typography>
          <Button onClick={handleGoHome} variant="contained">
            {t("goBack")}
          </Button>
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default NoPageFound;
