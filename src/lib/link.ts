/**
 * link — helper de rutas internas con la base pública del sitio.
 *
 * En GitHub Pages el sitio vive en una sub-ruta (p. ej. /facultadLalangue/);
 * `import.meta.env.BASE_URL` la expone —con barra final— y es '' en local.
 *
 * `base` es la base cruda: se usa tal cual para el enlace a la raíz del sitio
 * (`base || '/'`) y para assets estáticos (favicons).
 *
 * `link()` prefija esa base a las rutas internas ("/…") y deja intactas:
 *   - la raíz "/" (los enlaces a la raíz usan `base || '/'`),
 *   - las anclas ("#seccion", "#"),
 *   - los protocolos relativos ("//dominio"),
 *   - y las URLs absolutas (http/https/mailto/…).
 */
export const base = import.meta.env.BASE_URL;

export const link = (href: string): string =>
	href.startsWith('/') && href.length > 1 && !href.startsWith('//') ? base + href.slice(1) : href;
