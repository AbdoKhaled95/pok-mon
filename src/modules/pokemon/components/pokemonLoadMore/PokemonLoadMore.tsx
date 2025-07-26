import PokemonList from "../pokemonList/PokemonList";
import "./PokemonLoadMore.scss";
import CustomLoader from "@components/loaders/customLoader/CustomLoader";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import type { PokemonResult } from "@modules/pokemon/models/pokemon.model";
import { useLoadMorePokemons } from "@modules/pokemon/services/useGetPokemonsApi";
type Props = {
  className?: string;
};
const PokemonLoadMore = ({ className }: Props) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useLoadMorePokemons();
  console.log(data?.pages.flat());
  const list: PokemonResult[] = data?.pages?.flat() ? data?.pages?.flat() : [];

  if (isLoading) return <CustomLoader />;

  return (
    <div className={`pokemon_load_more ${className ?? ""}`}>
      <PokemonList data={list} className="pokemon_load_more-list" />
      <div className="pokemon_load_more-pagination">
        <Button
          variant="contained"
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          disabled={!hasNextPage}
        >
          {hasNextPage ? "Load More" : "No More"}
        </Button>
        <Typography
          variant="body2"
          className="pokemon_pagination-pagination--text"
        >
          Showing {list?.length} Pokemon
        </Typography>
      </div>
      {/* 
            👇 This local error handling (showing a Snackbar) is added only to fulfill the task requirement.
            🔄 In real React projects, I normally handle errors globally using an Error Boundary and Axios interceptor. 
      */}
      <Snackbar open={isError} autoHideDuration={3000}>
        <Alert severity="error" variant="filled">
          Something went wrong, please try again
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PokemonLoadMore;
