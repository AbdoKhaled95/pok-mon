import axiosInstance from "@libraries/axios/axiosInstance";

const POKEMONS_ENDPOINT = "/pokemon";

export const getPokemons = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  return axiosInstance.get(`${POKEMONS_ENDPOINT}`, {
    params: {
      limit,
      offset,
    },
  });
};
export const getPokemon = async ({ id }: { id: number }) => {
  return axiosInstance.get(`${POKEMONS_ENDPOINT}/${id}`);
};
