import "./PokémonsPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import PokémonsHead from "@modules/pokémon/components/pokémonsHead/PokémonsHead";

const PokémonsPage = () => {
  const { t } = useTranslation();
  useMount({
    documentTitle: t("pokémonList", { ns: "pokémon" }),
  });
  const { mode } = useSelector((state: RootState) => state.Pokémon);
  const getMode = () => {
    switch (mode) {
      case 0:
        return "pagination";
      case 1:
        return "loadMore";
      default:
        return "pagination";
    }
  };

  return (
    <PageMotion className={`pokémons_page ${getMode()}`} id="pokémons_page">
      <CustomContainer className="pokémons_page-container">
        <div className="pokémons_page-container--content">
          <PokémonsHead className="pokémons_page-container--content---head" />
          {getMode()}
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default PokémonsPage;
