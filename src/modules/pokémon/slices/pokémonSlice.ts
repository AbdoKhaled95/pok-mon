import { createSlice } from "@reduxjs/toolkit";

export type PokémonSlice = {
  pokémonId: number | null;
  limit: number;
  offset: number;
  mode: number;
};

const initialState: PokémonSlice = {
  pokémonId: null,
  offset: 0,
  limit: 20,
  mode: 0, // 0 = pagination, 1 = load more
};

const pokémonSlice = createSlice({
  name: "pokémon",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setPokémonId: (state, action) => {
      state.pokémonId = action.payload;
    },
    setPokémonInitialState: () => initialState,
  },
});

export const { setMode, setOffset, setPokémonId, setPokémonInitialState } =
  pokémonSlice.actions;
export default pokémonSlice.reducer;
