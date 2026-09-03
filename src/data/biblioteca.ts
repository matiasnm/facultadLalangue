/**
 * Datos de la página /nuestra-biblioteca (Mediateca).
 *
 * Secciones extraídas de la web https://facultadlalangue.com/nuestra-biblioteca/
 * (se omite la sección de Preguntas Frecuentes). El render se define UNA VEZ
 * en BloqueRender. En la sección del bibliotecario (Diego Baracat) se agrega
 * un botón que enlaza a la Librería Psicoanalítica.
 */
import { titulo, texto, lista, persona } from './componentes';
import type { BloquePagina } from './componentes';

export const bibliotecaSecciones: BloquePagina[] = [
	/* ── E-Book destacado ──────────────────────────────────────────────── */
	texto([
		'La **Biblioteca de FIPPL** desempeña un papel crucial en la mejora de la experiencia académica y el éxito de los estudiantes y profesores en un entorno virtual.',
		'Comprender la importancia de la flexibilidad en el aprendizaje de cada estudiante es fundamental. Por ello, la biblioteca se integra de manera activa en la formación, garantizando un acceso amplio y especializado a recursos clave en psicoanálisis.',
		'Para lograr esto, la Biblioteca cumple una serie de objetivos esenciales, respaldados por un **Bibliotecario especializado en psicoanálisis con más de 20 años de experiencia**:',
	]),

	/* ── Nuestro bibliotecario ─────────────────────────────────────────── */
	titulo('Nuestro bibliotecario'),
	persona(
		'Diego Baracat',
		'Bibliotecario especializado en psicoanálisis',
		[
			'Bibliotecario especializado en psicoanálisis con más de **25 años de experiencia**. Ha trabajado en políticas documentales de Desarrollo de Colecciones físicas privadas e institucionales y colaborado en la construcción de las mismas, así como también en la búsqueda y recuperación de documentos específicos.',
		],
		undefined,
		{
			etiqueta: 'Librería Psicoanalítica',
			href: 'https://www.dblibreriapsicoanalitica.com.ar/',
		},
	),
	lista([
		'Miembro del Capítulo Historia de la Salud Mental en la Argentina de la Asociación Argentina de Salud Mental.',
		'Director de la Colección «Psicoanálisis Vivo» de Ricardo Vergara Ediciones.',
		'Creador del canal digital @DiegoBibliotecario, dedicado a la difusión y reseñas de libros psicoanalíticos, presente en Instagram, Facebook, Youtube y TikTok.',
		'Co-creador de la 1º Feria del Libro Psicoanalítico del Oeste.',
		'Creador de la Feria del Libro Psicoanalítico de Bahía Blanca.',
	]),
];
