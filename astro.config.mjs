import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [tailwind(), react(), mdx(), image({ serviceEntryPoint: '@astrojs/image/sharp' })]
});