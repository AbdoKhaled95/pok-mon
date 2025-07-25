import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig } from "@store/persistConfig";
import settingsReducer from "@store/slices/settingsSlice";
import authenticationReducer from "@modules/authentication/slices/authenticationSlice";
import pokémonReducer from "@modules/pokémon/slices/pokémonSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  authentication: authenticationReducer,
  Pokémon: pokémonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
