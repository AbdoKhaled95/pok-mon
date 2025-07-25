import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import aliases from "./aliases";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
