import { useQuery } from "@tanstack/react-query";
import { POKEMON_QUERY_KEY } from "./pokemonQueryKey";
import { getPokemon } from "./pokemonEndPoints";
type Props = {
  id: number;
};
export const useGetPokemon = ({ id }: Props) => {
  return useQuery({
    queryKey: [POKEMON_QUERY_KEY, id],
    queryFn: () => getPokemon({ id }),
    placeholderData: (previousData) => previousData,
  });
};
