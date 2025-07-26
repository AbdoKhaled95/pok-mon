import { createSlice } from "@reduxjs/toolkit";

export type PokemonSlice = {
  pokemonId: number | null;
  limit: number;
  offset: number;
  mode: number;
  page: number;
};

const initialState: PokemonSlice = {
  pokemonId: null,
  offset: 0,
  page: 1,
  limit: 20,
  mode: 0, // 0 = pagination, 1 = load more
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPokemonId: (state, action) => {
      state.pokemonId = action.payload;
    },
    setPokemonInitialState: () => initialState,
  },
});

export const {
  setMode,
  setPage,
  setOffset,
  setPokemonId,
  setPokemonInitialState,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
