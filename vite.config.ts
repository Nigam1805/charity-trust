import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    // SPA fallback: serve index.html for routes like /about, /gallery so refresh works
    {
      name: "spa-fallback",
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ?? "";
          if (
            !url.includes(".") &&
            !url.startsWith("/assets") &&
            url !== "/favicon.ico" &&
            url !== "/logo.svg"
          ) {
            req.url = "/index.html";
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
