// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://jrmarcello.github.io',
  base: isGitHubPages ? '/professional-site' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});