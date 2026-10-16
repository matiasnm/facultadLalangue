# Facultad Lalangue — sitio web

Sitio de la Facultad Internacional de Psicología y Psicoanálisis Lalangue.
Astro + Tailwind v4 (sin React/Vue). Node ≥ 22.

**Referencias de Diseño de Hero y layout general:**

[petersonacademy.com](https://petersonacademy.com/)

[montecarlosbm.com](https://www.montecarlosbm.com/fr) se usa como **referencia** complementaria.

# Mapa

## Home (`src/pages/index.astro`)

Orden de cada sección

| # | Sección | Ancla |
|---|---------|-------|
| 1 | Hero | `#hero` |
| 2 | Carrusel de plantel | `#plantel` |
| 3 | Carrusel de formaciones | `#formaciones` |
| 4 | Metodología | `#metodologia` |
| 5 | El modelo académico articula | `#modelo-academico` |
| 6 | Inserción laboral (mapa) | `#mapa` |
| 7 | Esta institución es para ti si | `#institucion` |
| 8 | Salida Laboral Internacional | `#salida-laboral` |
| 9 | Supervisión Clínica | `#supervision` |
| 10 | Cierre (Tender puentes) | `#cierre` |
| 11 | Preguntas Frecuentes | — |


## Formaciones

> Simil web actual en WP

## Agenda y Mediateca(Pluma Lalangue?)

> A definir

## Roadmap (`/roadmap`)

`src/pages/roadmap.astro` es la **fuente de verdad de estilos**. Ahí viven:

- **Paleta de colores** + editor en vivo (se guarda en `localStorage`).
- **Color de fondo**, **Isotipo** y **Logo del navbar**.
- **Estilos globales** (tipografía, párrafos, citas, listas, código, formularios).
- **Criterios de diseño** (contenedor, gutter, measure, full-bleed).
- **Estilos del menú** y catálogo de bloques/componentes.
- **Componentes sin utilizar** → ancla
  [`/roadmap#componentes-sin-utilizar`](/roadmap#componentes-sin-utilizar):
  secciones viejas archivadas como referencia (páginas `/facultad` y
  `/plantel-academico`, dropdown «Conócenos», Agenda → «en construcción», etc.).

### Reglas de estilo (resumen)

- **Fuentes:** DM Sans (cuerpo) · Montserrat (h1) · Poppins (h2–h6) ·
  Roboto Condensed (menú/destacados) · Roboto Serif (serif). De Google Fonts.
- **Contenedor único:** `.contenedor` = máx. 72rem (1152px), centrado, gutter
  fluido. Solo las bandas propias usan `.full-bleed` (stats, cta, articula,
  modulos, admision, certificacion).
- **Texto de contenido:** 15px (`text-[0.9375rem]`); el 14px del body es para UI.
- **Tokens de color** (`src/styles/global.css`): `brand #8c1c3f` (vino) ·
  `brand-dark #5b1133` · `accent #c96f5a` (terracota) · `indigo #45426d` ·
  `night #191716` · `surface #f6f5f4` · `divider #e9e2dc` · `ink #332d2b` ·
  `ink-strong #1a1614` · `muted #756a64` · `background #ffffff`.
  Espejo en `src/data/paletas.ts` (`defaultTokens`) — **mantener sincronizados**.


## Comandos

```sh
npm install
npm run dev        # dev server (o: astro dev --background)
npm run build      # build a ./dist
npm run preview    # previsualizar el build
```

Deploy: push a `main` → GitHub Actions publica en GitHub Pages
(`.github/workflows/deploy.yml`). La sub-ruta de Pages llega por `BASE_PATH`
y se resuelve en `astro.config.mjs` (`base`). Los enlaces internos se arman
con `src/lib/link.ts` (`link(route)`), no a mano.

## Estructura

```
src/
  pages/       rutas: index (home), [slug] (formaciones), roadmap, textos, legales, 404
  components/  Header, Footer, Layout, Isotipo, ModalPersona, formacion/*
  data/        contenido: home.ts, facultad.ts, componentes.ts, docentes.ts, paletas.ts
  layouts/     Layout.astro
  styles/      global.css (tokens de diseño)
docs/          documentación de contenido y layout
public/        imágenes y assets
```

**Separación datos / diseño.** Las páginas solo declaran datos; el estilo de
cada sección se define **una vez** en `components/formacion/BloqueRender.astro`
(y `ComponenteComun.astro`).