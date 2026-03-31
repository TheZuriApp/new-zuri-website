import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const tunnelHost = process.env.VITE_DEV_TUNNEL_HOST;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
        },
      },
    },
  },
  server: {
    allowedHosts: [".ngrok-free.app", ".a.free.pinggy.link"],
    host: true,
    strictPort: true,
    ...(tunnelHost
      ? {
          hmr: {
            protocol: "wss",
            host: tunnelHost,
            clientPort: 443,
          },
        }
      : {}),
  },
});
