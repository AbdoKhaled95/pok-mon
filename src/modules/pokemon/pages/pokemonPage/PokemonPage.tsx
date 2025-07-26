import "./PokemonPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import { Button, Typography } from "@mui/material";
import { BaselineArrowBack } from "@assets/svgComponents/SvgIcons";
import { setPokemonId } from "@modules/pokemon/slices/pokemonSlice";
import PokemonInfoCard from "@modules/pokemon/components/pokemonInfoCard/PokemonInfoCard";
import { useGetPokemon } from "@modules/pokemon/services/useGetPokemonApi";
import CustomLoader from "@components/loaders/customLoader/CustomLoader";
import type { PokemonDetails } from "@modules/pokemon/models/pokemon.model";

const PokemonPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  useMount({ documentTitle: t("pokemon", { ns: "pokemon" }) });
  const { pokemonId } = useSelector((state: RootState) => state.pokemon);
  const { id } = useParams();
  const selectedId = pokemonId || Number(id);
  const { data, isLoading, isError, refetch } = useGetPokemon({
    id: selectedId,
  });
  const pokemonDetails: PokemonDetails = data?.data;

  const handleBack = () => {
    dispatch(setPokemonId(null));
    navigate(`/${ROUTES_PATH.POKEMON}`);
  };

  if (!selectedId) handleBack();
  if (isLoading) return <CustomLoader />;

  // this Retry it can be a component to reuse
  if (isError)
    return (
      <div className="pokemon_page-error">
        <Typography color="error" variant="h6">
          Some thing went wrong
        </Typography>
        <Button onClick={() => refetch()} variant="contained">
          Retry
        </Button>
      </div>
    );
  return (
    <PageMotion id="pokemon_page" className="pokemon_page">
      <CustomContainer className="pokemon_page-container">
        <div className="pokemon_page-container--content">
          <Button
            onClick={handleBack}
            variant="contained"
            className="pokemon_page-container--content---back"
          >
            <BaselineArrowBack />
            Back to list
          </Button>
          <div className="pokemon_page-container--content---info">
            <PokemonInfoCard
              data={pokemonDetails}
              className="pokemon_page-container--content---info----card"
            />
          </div>
        </div>
      </CustomContainer>
    </PageMotion>
  );
};

export default PokemonPage;
