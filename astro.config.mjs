import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reframestudio.es',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
