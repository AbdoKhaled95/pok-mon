import "./NoDataFound.scss";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
type Props = {
  description?: string;
  className?: string;
};
const NoDataFound = ({ description, className }: Props) => {
  const { t } = useTranslation(["general"], { nsMode: "fallback" });
  return (
    <div
      className={`flex flex-column align-center no_data_found ${
        className ?? ""
      }`}
    >
      <Typography className="no_data_found-title">
        {t("general:noDataFound.title")}
      </Typography>
      {description && (
        <Typography className="no_data_found-description">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default NoDataFound;
