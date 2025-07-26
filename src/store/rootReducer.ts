import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig } from "@store/persistConfig";
import settingsReducer from "@store/slices/settingsSlice";
import authenticationReducer from "@modules/authentication/slices/authenticationSlice";
import pokemonReducer from "@modules/pokemon/slices/pokemonSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  authentication: authenticationReducer,
  pokemon: pokemonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
