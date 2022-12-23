import { defineConfig } from 'astro/config';

// https://astro.build/config
// import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

import robotsConfig from './robot-txt.config.mjs';

export default defineConfig({
  site: 'https://bazco.de',
  // integrations: [sitemap(), robotsTxt(robotsConfig), tailwind(), react(), mdx(), image({ serviceEntryPoint: '@astrojs/image/sharp' })]
  integrations: [robotsTxt(robotsConfig), tailwind(), react(), mdx(), image({ serviceEntryPoint: '@astrojs/image/sharp' })]
});