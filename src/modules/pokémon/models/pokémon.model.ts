export type PokemonResult = {
  name: string;
  url: string;
};
export type Pokémon = {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonResult[];
};
