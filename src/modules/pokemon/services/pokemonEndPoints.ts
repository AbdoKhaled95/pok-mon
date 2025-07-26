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
