import "./PokémonsPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";

const PokémonsPage = () => {
  const { t } = useTranslation();
  useMount({
    documentTitle: t("pokémonList", { ns: "pokémon" }),
  });

  return (
    <PageMotion id="pokémons_page">
      <CustomContainer className="pokémons_page-container">
        pokémonList
      </CustomContainer>
    </PageMotion>
  );
};

export default PokémonsPage;
