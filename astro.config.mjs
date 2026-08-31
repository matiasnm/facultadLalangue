// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Base pública del sitio. En GitHub Pages la acción configure-pages expone
// BASE_PATH (p. ej. /facultadLalangue); lo normalizamos para que termine en
// "/" (Astro exige que `base` termine con barra). Localmente BASE_PATH es
// '' y el sitio vive en la raíz.
const base = (process.env.BASE_PATH || '')
	.replace(/\/+$/, '') // quita barras finales
	.concat('/');

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio desplegado (necesaria para GitHub Pages / sitemap).
  site: 'https://matiasnm.github.io',
  // En GitHub Pages el sitio vive en una sub-ruta (/facultadLalangue/).
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});