import PokémonList from "../pokémonList/PokémonList";
import "./PokémonLoadMore.scss";
import CustomLoader from "@components/loaders/customLoader/CustomLoader";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import type { PokemonResult } from "@modules/pokémon/models/pokémon.model";
import { useLoadMorePokémons } from "@modules/pokémon/services/useGetPokémonsApi";
type Props = {
  className?: string;
};
const PokémonLoadMore = ({ className }: Props) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useLoadMorePokémons();
  console.log(data?.pages.flat());
  const list: PokemonResult[] = data?.pages?.flat() ? data?.pages?.flat() : [];

  if (isLoading) return <CustomLoader />;

  return (
    <div className={`pokémon_load_more ${className ?? ""}`}>
      <PokémonList data={list} className="pokémon_load_more-list" />
      <div className="pokémon_load_more-pagination">
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
          className="pokémon_pagination-pagination--text"
        >
          Showing {list?.length} Pokémon
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

export default PokémonLoadMore;
