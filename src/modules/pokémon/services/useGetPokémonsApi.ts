import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import type { RootState } from "@store/store";
import { POKEMONS_QUERY_KEY } from "./pokémonQueryKey";
import { getPokemons } from "./pokémonEndPoints";

export const useGetPokémons = () => {
  const { limit, offset } = useSelector((state: RootState) => state.Pokémon);
  return useQuery({
    queryKey: [POKEMONS_QUERY_KEY, limit, offset],
    queryFn: () => getPokemons({ limit, offset }),
    placeholderData: (previousData) => previousData,
  });
};
export const useLoadMorePokémons = () => {
  const { limit } = useSelector((state: RootState) => state.Pokémon);
  return useInfiniteQuery({
    queryKey: [POKEMONS_QUERY_KEY],
    queryFn: ({ pageParam = 0 }) =>
      getPokemons({ limit, offset: pageParam }).then(
        (res) => res?.data?.results
      ),
    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage);
      console.log(allPages);

      const hasMore = lastPage?.length === limit;
      return hasMore ? allPages.length * limit : undefined;
    },

    placeholderData: (prev) => prev,
  });
};
