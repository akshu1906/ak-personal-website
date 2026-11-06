import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://akshu1906.github.io',
  base: '/ak-personal-website/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
