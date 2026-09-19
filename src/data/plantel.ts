/**
 * Datos de la página /plantel-academico.
 *
 * Secciones extraídas de docs/plantel-academico-contenido.md: decana,
 * directores académicos, comité científico y plantel docente. Cada persona se
 * modela como bloque `persona` (perfil) o `equipo` (grid). El render se define
 * UNA VEZ en BloqueRender.
 */
import { titulo, texto, persona, equipo, tarjetas } from './componentes';
import { directores, docentes } from './docentes';
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
		'/conocenos/lorena_salthu.webp',
	),

	/* ── Directores académicos ─────────────────────────────────────────── */
	titulo('Directores Académicos'),
	equipo(directores, 2, true, true),

	/* ── Comité Científico ─────────────────────────────────────────────── */
	titulo('Comité Científico'),
	texto([
		'Reconociendo la excelencia de nuestros estándares y métodos de enseñanza, destacadas personalidades del mundo Psy se han sumado a nuestro **comité científico, ético y humanista**.',
	]),
	equipo([
		{ nombre: 'Dr. Juan David Nasio', foto: '/conocenos/juan_david_nasio.webp' },
		{ nombre: 'Bernard Granger', foto: '/conocenos/bernard_granger.webp' },
		{ nombre: 'Lic. Edwige Antier', foto: '/conocenos/edwige_antier.webp' },
		{ nombre: 'Eric Malbos', foto: '/conocenos/eric_malbos.webp' },
		{ nombre: 'Cynthia Fleury', foto: '/conocenos/cynthia_fleury.webp' },
		{ nombre: 'Serge Tisseron', foto: '/conocenos/serge_tisseron.webp' },
		{ nombre: 'Stéphane Gaudry', foto: '/conocenos/stephane_gaudry.webp' },
		{ nombre: 'Rodophe Oppenheimer', foto: '/conocenos/rodophe_oppenheimer.webp' },
		{ nombre: 'Lic. Flora Bernard', foto: '/conocenos/flora_bernard.webp' },
		{ nombre: 'Edgar Morin', foto: '/conocenos/edgar_morin.webp' },
		{ nombre: 'Bruno Millet', foto: '/conocenos/bruno_millet.webp' },
	]),

	/* ── Plantel Docente ───────────────────────────────────────────────── */
	titulo('Plantel Docente'),
	texto([
		'Nuestro equipo docente está compuesto por **profesionales de renombre** con amplia experiencia en psicoanálisis, psicoterapia e investigación. En Facultad Lalangue, no solo aprenderás teoría, sino que contarás con el acompañamiento de especialistas que te guiarán en cada etapa de tu formación.',
	]),
	equipo(docentes, 3, true),

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
