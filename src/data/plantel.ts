/**
 * Datos de la página /plantel-academico.
 *
 * Secciones extraídas de docs/plantel-academico-contenido.md: decana,
 * directores académicos, comité científico y plantel docente. Cada persona se
 * modela como bloque `persona` (perfil) o `equipo` (grid). El render se define
 * UNA VEZ en BloqueRender.
 */
import { titulo, texto, persona, equipo, tarjetas } from './componentes';
import type { BloquePagina } from './componentes';

export const plantelSecciones: BloquePagina[] = [
	/* ── Introducción ──────────────────────────────────────────────────── */
	titulo('El equipo docente Lalangue'),
	texto([
		'El equipo docente Lalangue está compuesto por **profesionales de renombre** con amplia experiencia en psicoanálisis, psicoterapia e investigación.',
		'En Lalangue, no solo aprenderás teoría, sino que contarás con el acompañamiento de especialistas que te guiarán en cada etapa de tu formación.',
	]),

	/* ── Decana ────────────────────────────────────────────────────────── */
	titulo('Decana'),
	persona(
		'Lorena Salthu',
		'Decana de Facultad Lalangue',
		[
			'Psicoanalista con más de 25 años de trayectoria internacional en la práctica clínica, la gestión empresarial y el desarrollo de proyectos internacionales. Cuenta con una sólida formación multidisciplinaria, con especializaciones en Psiconeuroinmunología (España y EE.UU.) y Terapia Cognitivo-Conductual (TCC) en l\u2019EFPP (Francia).',
			'Docente, conferencista y autora de artículos especializados, desarrolla su actividad profesional en español, francés e inglés, promoviendo una transmisión rigurosa y abierta del psicoanálisis como instrumento privilegiado de lectura clínica del sujeto y del malestar contemporáneo.',
			'Es miembro de la *National Counselling and Psychotherapy Society* (Reino Unido) y de la *National Psychoanalysis Association* (NPSA). Fundadora de **PSY.S.O.S.**, una iniciativa de atención global gratuita en situaciones de urgencia psicológica.',
		],
	),

	/* ── Directores académicos ─────────────────────────────────────────── */
	titulo('Directores Académicos'),
	equipo([
		{ nombre: 'Lic. Gabriela Artaza Toro', titulo: 'Directora Académica' },
		{ nombre: 'Lic. Diego Núñez', titulo: 'Director Académico' },
	]),

	/* ── Comité Científico ─────────────────────────────────────────────── */
	titulo('Comité Científico'),
	texto([
		'Reconociendo la excelencia de nuestros estándares y métodos de enseñanza, destacadas personalidades del mundo Psy se han sumado a nuestro **comité científico, ético y humanista**.',
	]),
	equipo([
		{ nombre: 'Dr. Juan David Nasio' },
		{ nombre: 'Bernard Granger' },
		{ nombre: 'Lic. Edwige Antier' },
		{ nombre: 'Eric Malbos' },
		{ nombre: 'Cynthia Fleury' },
		{ nombre: 'Serge Tisseron' },
		{ nombre: 'Stéphane Gaudry' },
		{ nombre: 'Rodophe Oppenheimer' },
		{ nombre: 'Lic. Flora Bernard' },
		{ nombre: 'Edgar Morin' },
		{ nombre: 'Bruno Millet' },
	]),

	/* ── Plantel Docente ───────────────────────────────────────────────── */
	titulo('Plantel Docente'),
	texto([
		'Nuestro equipo docente está compuesto por **profesionales de renombre** con amplia experiencia en psicoanálisis, psicoterapia e investigación. En Facultad Lalangue, no solo aprenderás teoría, sino que contarás con el acompañamiento de especialistas que te guiarán en cada etapa de tu formación.',
	]),
	equipo([
		{ nombre: 'Dra. Marta Gerez Ambertín' },
		{ nombre: 'Lic. Macarena Cao Gené' },
		{ nombre: 'Lic. Fabiana Tomei' },
		{ nombre: 'Lic. Lucas Vázquez Topssian' },
		{ nombre: 'Lic. Ester Noemí Migrabi' },
		{ nombre: 'Lic. Vanessa Carpaneto Sueldo' },
		{ nombre: 'Lic. Juan Manuel Martínez' },
		{ nombre: 'Lic. José Joaquín Valderrama' },
		{ nombre: 'Dra. Verónica Molina Gerstner' },
		{ nombre: 'Lic. Silvia Kargodorian' },
		{ nombre: 'Lic. Juan Augusto Laplacette' },
		{ nombre: 'Lic. Gisela Manero' },
		{ nombre: 'Lic. Pía Martina' },
		{ nombre: 'Lic. Yamila Coronel' },
		{ nombre: 'Lic. Alejandra Giudice' },
		{ nombre: 'Lic. Sebastián Mosquera' },
		{ nombre: 'Lic. Noelia Benedetto' },
	]),

	/* ── Nuestras formaciones ──────────────────────────────────────────── */
	titulo('Nuestras formaciones'),
	texto([
		'Encuentra a nuestro destacado plantel académico en las **formaciones en psicología y psicoanálisis online** que Facultad Lalangue ofrece. Profundiza el estudio del inconsciente y la subjetividad contemporánea desde una visión teórica y clínica.',
	]),
	tarjetas([
		{ titulo: 'Máster en Psicoanálisis Aplicado', href: '/master-en-psicoanalisis/' },
		{ titulo: 'Diplomatura en Psicoterapia Psicoanalítica', href: '/psicoterapia-psicoanalitica/' },
		{ titulo: 'Diplomatura en Subjetividad Digital', href: '/subjetividad-digital/' },
		{ titulo: 'Diplomatura en Clínica de Parejas y Erotismo Relacional', href: '/clinica-de-parejas/' },
		{ titulo: 'Diplomatura en Psicopatología Infanto-Juvenil', href: '/psicopatologia-infanto-juvenil/' },
		{ titulo: 'Diplomatura en Metapsicología: Introducción a la teoría psicoanalítica', href: '/metapsicologia/' },
	]),
];
