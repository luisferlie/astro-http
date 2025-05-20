// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';



import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-http.netlify.app/',
  integrations: [mdx(), sitemap(), db(), vue()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});