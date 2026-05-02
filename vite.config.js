import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),

    // Only generate stats when you explicitly ask for it
    mode === "analyze" &&
      visualizer({
        filename: "dist/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),

  build: {
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 900,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom")) return "vendor-react-dom";
            if (id.includes("react-router")) return "vendor-router";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("motion-dom") || id.includes("motion-utils")) {
              return "vendor-motion";
            }
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("react-icons")) return "vendor-react-icons";
            if (id.includes("react")) return "vendor-react";

            return "vendor";
          }
        },
      },
    },
  },
}));