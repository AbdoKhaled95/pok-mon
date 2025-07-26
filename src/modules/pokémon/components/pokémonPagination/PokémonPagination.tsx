import { useGetPokémons } from "@modules/pokémon/services/useGetPokémonsApi";
import PokémonList from "../pokémonList/PokémonList";
import "./PokémonPagination.scss";
import { Button, Pagination, Typography } from "@mui/material";
import type { Pokémon } from "@modules/pokémon/models/pokémon.model";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { setOffset, setPage } from "@modules/pokémon/slices/pokémonSlice";
import CustomLoader from "@components/loaders/customLoader/CustomLoader";
type Props = {
  className?: string;
};
const PokémonPagination = ({ className }: Props) => {
  const { limit, page } = useSelector((state: RootState) => state.Pokémon);
  const dispatch = useDispatch();
  const { data, isError, refetch, isLoading, isFetching } = useGetPokémons();
  const res: Pokémon = data?.data;
  const pokémonList = res?.results;
  const totalPages = Math.ceil(res?.count / limit);
  const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
    const newOffset = page * limit - limit;
    dispatch(setOffset(newOffset));
  };

  if (isLoading) return <CustomLoader />;
  if (isError)
    return (
      <div className="pokémon_pagination-error">
        <Typography color="error" variant="h6">
          Some thing went wrong
        </Typography>
        <Button onClick={() => refetch()} variant="contained">
          Retry
        </Button>
      </div>
    );

  return (
    <div className={`pokémon_pagination ${className ?? ""}`}>
      <PokémonList data={pokémonList} className="pokémon_pagination-list" />
      <div className="pokémon_pagination-pagination">
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
          className="pokémon_pagination-pagination--text"
        >
          Page {page} of {totalPages} ({limit} Pokémon shown)
        </Typography>
      </div>
    </div>
  );
};

export default PokémonPagination;
