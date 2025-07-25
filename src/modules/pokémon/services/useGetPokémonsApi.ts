import { useQuery } from "@tanstack/react-query";
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
