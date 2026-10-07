import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages serves the site from /TIAL-construction/, local dev from "/".
  const base = mode === "production" ? "/TIAL-construction/" : "/";
  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      // vite-plugin-singlefile forces base to "./" (it runs with enforce:"post"),
      // which would break the router basename and the favicon URL, so override it.
      viteSingleFile({ overrideConfig: { base } }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
