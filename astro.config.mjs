// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomxdiaz.github.io',
  base: '/tomascodes.dev/',
  integrations: [mdx(), sitemap()],
});
