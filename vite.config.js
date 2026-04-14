import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (id.includes("swiper")) {
            return "swiper";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("@react-three/drei")) {
            return "drei";
          }

          if (id.includes("@react-three/fiber")) {
            return "fiber";
          }

          if (id.includes("/three/")) {
            return "three-core";
          }

          return "vendor";
        },
      },
    },
  },
});
