import { createSlice } from "@reduxjs/toolkit";

export type PokémonSlice = {
  pokémonId: number | null;
  page: number;
  limit: number;
};

const initialState: PokémonSlice = {
  pokémonId: null,
  page: 0,
  limit: 20,
};

const pokémonSlice = createSlice({
  name: "pokémon",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPokémonId: (state, action) => {
      state.pokémonId = action.payload;
    },
    setPokémonInitialState: () => initialState,
  },
});

export const { setPage, setPokémonId, setPokémonInitialState } =
  pokémonSlice.actions;
export default pokémonSlice.reducer;
