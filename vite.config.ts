import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/reactLolCommunity/" : "/",
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
}));
