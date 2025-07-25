import "./PokémonPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

const PokémonPage = () => {
  const { t } = useTranslation();
  useMount({ documentTitle: t("pokémon", { ns: "pokémon" }) });
  const { pokémonId } = useSelector((state: RootState) => state.Pokémon);

  return (
    <PageMotion id="pokémon_page">
      <CustomContainer className="pokémon_page-container">
        pokémon
      </CustomContainer>
    </PageMotion>
  );
};

export default PokémonPage;
