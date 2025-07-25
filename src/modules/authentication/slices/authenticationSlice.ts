import { createSlice } from "@reduxjs/toolkit";

export type AuthenticationSlice = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthenticationSlice = {
  token: null,
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
