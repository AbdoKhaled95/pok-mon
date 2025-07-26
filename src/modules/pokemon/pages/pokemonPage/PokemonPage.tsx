import "./PokemonPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { useParams } from "react-router-dom";

const PokemonPage = () => {
  const { t } = useTranslation();
  useMount({ documentTitle: t("pokemon", { ns: "pokemon" }) });
  const { pokemonId } = useSelector((state: RootState) => state.pokemon);
  const { id } = useParams();
  const selectedId = pokemonId || id;

  return (
    <PageMotion id="pokemon_page">
      <CustomContainer className="pokemon_page-container">
        pokemon {selectedId}
      </CustomContainer>
    </PageMotion>
  );
};

export default PokemonPage;
