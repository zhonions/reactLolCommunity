import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/reactLolCommunity/' : '/', // Base de produção para GitHub Pages
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
}));
