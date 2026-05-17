// Separate Vite config for the GitHub Pages static SPA build.
// Does NOT use TanStack Start or Cloudflare Workers — plain React SPA.
// Entry: index.html → src/main.tsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/symphony-of-giving/",
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-gh-pages",
    emptyOutDir: true,
  },
});
