import "./PokemonsPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import PokemonsHead from "@modules/pokemon/components/pokemonsHead/PokemonsHead";
import PokemonLoadMore from "@modules/pokemon/components/pokemonLoadMore/PokemonLoadMore";
import PokemonPagination from "@modules/pokemon/components/pokemonPagination/PokemonPagination";

const PokemonsPage = () => {
  const { t } = useTranslation();
  useMount({
    documentTitle: t("pokemonList", { ns: "pokemon" }),
  });
  const { mode } = useSelector((state: RootState) => state.pokemon);
  const getMode = () => {
    switch (mode) {
      case 0:
        return {
          mode: "pagination",
          component: (
            <PokemonPagination className="pokemons_page-container--content---items" />
          ),
        };
      case 1:
        return {
          mode: "loadMore",
          component: (
            <PokemonLoadMore className="pokemons_page-container--content---items" />
          ),
        };
      default:
        return {
          mode: "pagination",
          component: (
            <PokemonPagination className="pokemons_page-container--content---items" />
          ),
        };
    }
  };

  return (
    <PageMotion
      className={`pokemons_page ${getMode()?.mode}`}
      id="pokemons_page"
    >
      <CustomContainer className="pokemons_page-container">
        <div className="pokemons_page-container--content">
          <PokemonsHead className="pokemons_page-container--content---head" />
          {getMode().component}
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default PokemonsPage;
