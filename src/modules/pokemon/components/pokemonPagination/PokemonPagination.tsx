import { useGetPokemons } from "@modules/pokemon/services/useGetPokemonsApi";
import PokemonList from "../pokemonList/PokemonList";
import "./PokemonPagination.scss";
import { Button, Pagination, Typography } from "@mui/material";
import type { Pokemon } from "@modules/pokemon/models/pokemon.model";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { setOffset, setPage } from "@modules/pokemon/slices/pokemonSlice";
import CustomLoader from "@components/loaders/customLoader/CustomLoader";
type Props = {
  className?: string;
};
const PokemonPagination = ({ className }: Props) => {
  const { limit, page } = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const { data, isError, refetch, isLoading, isFetching } = useGetPokemons();
  const res: Pokemon = data?.data;
  const pokemonList = res?.results;
  const totalPages = Math.ceil(res?.count / limit);
  const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
    const newOffset = page * limit - limit;
    dispatch(setOffset(newOffset));
  };

  if (isLoading) return <CustomLoader />;
  if (isError)
    return (
      <div className="pokemon_pagination-error">
        <Typography color="error" variant="h6">
          Some thing went wrong
        </Typography>
        <Button onClick={() => refetch()} variant="contained">
          Retry
        </Button>
      </div>
    );

  return (
    <div className={`pokemon_pagination ${className ?? ""}`}>
      <PokemonList data={pokemonList} className="pokemon_pagination-list" />
      <div className="pokemon_pagination-pagination">
        <Pagination
          count={totalPages}
          shape="rounded"
          color="primary"
          onChange={onPageChange}
          page={page}
          disabled={isFetching}
        />
        <Typography
          variant="body2"
          className="pokemon_pagination-pagination--text"
        >
          Page {page} of {totalPages} ({limit} Pokemon shown)
        </Typography>
      </div>
    </div>
  );
};

export default PokemonPagination;
