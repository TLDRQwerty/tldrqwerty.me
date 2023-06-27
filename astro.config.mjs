import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

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
