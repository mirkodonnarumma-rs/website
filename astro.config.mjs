import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import cloudflare from "@astrojs/cloudflare";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  },

  adapter: cloudflare(),
});