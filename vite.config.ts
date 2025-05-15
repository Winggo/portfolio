import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    {
      name: 'strip-type-module-in-prod',
      transformIndexHtml(html) {
        // Only transform in production build
        if (process.env.NODE_ENV === 'production') {
          return html
            .replace(/type="module"/g, '')      // remove type="module"
            .replace(/crossorigin/g, '')        // optionally remove crossorigin
            .replace(/<script(.*?)>/g, '<script$1 defer>'); // add defer to script
        }
        return html;
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "docs"),
    emptyOutDir: false,
  },
  base: './',
});
