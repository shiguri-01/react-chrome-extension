import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";
import manifestJson from "./manifest.json";

const manifest = manifestJson as ManifestV3Export;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174,
    },
  },
});
