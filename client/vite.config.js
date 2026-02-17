// client/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: command === "serve"
    ? {
        host: true,
        port: 5173,
        allowedHosts: ["multiversal.space"], //data-tide.net  //multiversal.space
        proxy: {
          "/api": {
            target: "http://server:5000",
            changeOrigin: true,
            secure: false,
          },
        },
      }
    : undefined,
}));
