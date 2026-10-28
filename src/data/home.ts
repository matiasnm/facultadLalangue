/**
 * home.ts — datos de la home (`src/pages/index.astro`).
 *
 * Reutiliza las secciones compartidas de facultad.ts sin
 * duplicar texto y agrega lo nuevo de la home: los dos carruseles (plantel y
 * formaciones) y el cierre "Tender puentes", que absorbe las Preguntas
 * Frecuentes. El hero vive escrito en index.astro.
 *
 * El render se define UNA VEZ en BloqueRender.astro.
 */
import { carrusel, titulo, texto, lista } from './componentes';
import type { BloqueCarrusel, BloqueCarruselItem, BloquePagina } from './componentes';
import { directores, docentes } from './docentes';
import {
	seccionMetodologia,
	seccionModeloAcademico,
	seccionEstadisticas,
	seccionInstitucionParaTiSi,
	seccionSalidaLaboral,
	seccionSupervisionHome,
	seccionFaqs,
} from './facultad';

/* ── Carrusel de plantel ────────────────────────────────────────────── */

/** Convierte una persona del plantel en ítem del carrusel. */
const aItemCarrusel = (p: { nombre: string; titulo?: string; foto?: string; bio?: string[] }): BloqueCarruselItem => ({
	titulo: p.nombre,
	subtitulo: p.titulo,
	foto: p.foto,
	bio: p.bio,
});

const itemsPlantel: BloqueCarruselItem[] = [
	{
		titulo: 'Lorena Salthu',
		subtitulo: 'Decana de Facultad Lalangue',
		foto: '/conocenos/lorena_salthu.webp',
		bio: [
			'Psicoanalista con más de 25 años de trayectoria internacional en la práctica clínica, la gestión empresarial y el desarrollo de proyectos internacionales. Cuenta con una formación en psicoanálisis y una vasta experiencia en la dirección de instituciones.',
			'Fundadora de la Facultad Internacional de Psicología y Psicoanálisis Lalangue y presidenta de la Fundación Psicoanalítica. Dirige el proyecto académico con una vocación internacional y una apuesta por la formación clínica de calidad accesible.',
		],
	},
	...directores.map(aItemCarrusel),
	...docentes.map(aItemCarrusel),
];

export const carruselPlantel: BloquePagina = carrusel({
	titulo: 'Un equipo docente de renombre',
	kicker: 'Plantel',
	intro: [
		'El equipo docente Lalangue está compuesto por **profesionales de renombre** con amplia experiencia en psicoanálisis, psicoterapia e investigación.',
		'En Lalangue, no solo aprenderás teoría, sino que contarás con el acompañamiento de especialistas que te guiarán en cada etapa de tu formación.',
	],
	variante: 'personas',
	modal: true,
	items: itemsPlantel,
	id: 'plantel',
});

/* ── Carrusel de formaciones ────────────────────────────────────────── */

const itemsFormaciones: BloqueCarruselItem[] = [
	{
		titulo: 'Máster en Psicoanálisis Aplicado',
		descripcion: 'Para quienes comparten la pasión por un psicoanálisis actual.',
		href: '/master-en-psicoanalisis/',
		imagen: '/formaciones-carousel-n/Master1080-1024x576.webp',
		alt: 'Máster en psicoanálisis aplicado',
	},
	{
		titulo: 'Diplomatura en Psicoterapia Psicoanalítica',
		descripcion: 'Para quienes desean aprender a acompañar desde una perspectiva psicoanalítica contemporánea.',
		href: '/psicoterapia-psicoanalitica/',
		imagen: '/formaciones-carousel-n/diploPsicoterapia-1024x576.webp',
		alt: 'Diplomatura en Psicoterapia psicoanalítica',
	},
	{
		titulo: 'Diplomatura en Subjetividad Digital',
		descripcion:
			'Comprende cómo las plataformas digitales, los algoritmos y las dinámicas de las redes sociales están transformando la subjetividad y el bienestar psicológico.',
		href: '/subjetividad-digital/',
		imagen: '/formaciones-carousel-n/SubjetividadDigital-1-1024x576.webp',
		alt: 'Subjetividad Digital, Daño Algorítmico y Nuevas Formas de Sufrimiento Online',
	},
	{
		titulo: 'Diplomatura en Clínica de Parejas y Erotismo Relacional',
		descripcion: 'Herramientas contemporáneas para una clínica de pareja aplicable, en los conflictos, los síntomas y la historia.',
		href: '/clinica-de-parejas/',
		imagen: '/formaciones-carousel-n/Parejas-1024x576.webp',
		alt: 'Diplomatura en clínica de parejas y erotismo relacional',
	},
	{
		titulo: 'Diplomatura en Psicopatología Infanto-Juvenil',
		descripcion:
			'Para quienes deseen especializarse en psicopatología y clínica infantojuvenil desde una perspectiva psicoanalítica contemporánea.',
		href: '/psicopatologia-infanto-juvenil/',
		imagen: '/formaciones-carousel-n/Psicopatologia1080-1024x576.webp',
		alt: 'Diplomatura en psicopatología infantojuvenil',
	},
	{
		titulo: 'Diplomatura en Metapsicología',
		descripcion: 'Introducción a la lógica psicoanalítica: los fundamentos teóricos del psicoanálisis.',
		href: '/metapsicologia/',
		imagen: '/formaciones-carousel-n/metapsicologia1-1024x576.webp',
		alt: 'Diplomatura en Metapsicología: Introducción al psicoanálisis',
	},
];

export const carruselFormaciones: BloqueCarrusel = carrusel({
	titulo: 'Nuestras formaciones',
	kicker: 'Formaciones',
	intro: [
		'La facultad ofrece **formaciones en psicología y psicoanálisis online** que integran teoría y clínica para profundizar en el estudio del inconsciente y la comprensión de la subjetividad contemporánea.',
	],
	variante: 'tarjetas',
	items: itemsFormaciones,
	id: 'formaciones',
});

/* ── Cierre: Tender puentes ─────────────────────────────────────────── */

export const seccionCierre: BloquePagina[] = [
	titulo('Tender puentes', 2, undefined, 'cierre'),
	texto([
		'Lalangue busca contribuir al desarrollo del pensamiento clínico contemporáneo que aborde los desafíos culturales, sociales y tecnológicos de nuestro tiempo, estableciendo la formación clínica como un proceso que combina:',
	]),
	lista([
		'Estudio teórico riguroso',
		'Práctica clínica supervisada',
		'Trabajo colectivo en una comunidad académica internacional',
	]),
	texto('Escuchando las inquietudes de la época, optando por desempeñar un papel protagónico en una era profundamente tecnificada e individualizada, para tender puentes.'),
];

/* ── Composición de la home (después del hero) ──────────────────────── */

export const homeSecciones: BloquePagina[] = [
	carruselPlantel,
	carruselFormaciones,
	...seccionMetodologia,
	...seccionModeloAcademico,
	...seccionEstadisticas,
	...seccionInstitucionParaTiSi,
	...seccionSalidaLaboral,
	...seccionSupervisionHome,
	...seccionCierre,
	...seccionFaqs,
];
