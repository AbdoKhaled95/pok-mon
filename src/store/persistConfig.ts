import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
// import sessionStorage from "redux-persist/lib/storage/session";

export const persistConfig = {
  key: import.meta.env.VITE_APP_STORAGE_KEY,
  storage,
  whitelist: ["settings", "authentication"], // Only persist the authentication slice
};
