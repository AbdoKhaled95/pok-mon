import "./Forbidden.scss";
import { useTranslation } from "react-i18next";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useNavigate } from "react-router-dom";
import useMount from "@hooks/useMount";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import { Button, Typography } from "@mui/material";

const Forbidden = () => {
  const { t } = useTranslation(["general"], { nsMode: "fallback" });
  useMount({
    documentTitle: t("forbidden.title"),
  });

  const navigate = useNavigate();
  const handleGoHome = () => navigate(`/${ROUTES_PATH.HOME}`);
  return (
    <PageMotion id="forbidden" className="">
      <CustomContainer>
        <div className="flex flex-column align-center gap-1r forbidden">
          <Typography variant="h5" className="forbidden-title">
            {t("forbidden.title")}
          </Typography>
          <Typography className="forbidden-description">
            {t("forbidden.description")}
          </Typography>
          <Button onClick={handleGoHome} variant="contained">
            {t("goBack")}
          </Button>
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default Forbidden;
