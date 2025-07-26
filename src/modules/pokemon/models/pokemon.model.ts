export type PokemonInfo = {
  name: string;
  url: string;
};
export type Pokemon = {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonInfo[];
};
export type PokemonSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};
export type PokemonAbility = {
  ability: PokemonInfo;
  is_hidden: boolean;
  slot: number;
};
export type PokemonTypes = {
  slot: number;
  type: PokemonInfo;
};
export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: PokemonInfo;
};
export type PokemonDetails = {
  id: number;
  is_default: boolean;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  species: PokemonInfo;
  types: PokemonTypes[];
  stats: PokemonStat[];
  base_experience: number;
};
