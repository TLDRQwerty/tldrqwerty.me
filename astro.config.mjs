import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    react(),
    svelte(),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  experimental: {
    assets: true,
   }
});
