/**
 * Paletas de color candidatas para el sitio.
 *
 * Cada paleta define los TOKENS COMPLETOS que se aplican en :root:
 * la marca (brand / brand-dark), el acento, la tinta, los neutros y el
 * fondo. A diferencia de la primera versión (donde brand/brand-dark eran
 * fijos), ahora cada tema lleva SU propia marca: al elegir una paleta se
 * repinta todo el sitio (header, footer, isotipo, textos) porque todos los
 * componentes consumen las variables CSS --color-*.
 *
 * Las 5 paletas se derivan de las 5 familias de color provistas:
 *   night-bordeaux · dark-teal · cherry-rose · ivory-mist · pacific-blue
 *
 * Además de los tokens, cada paleta declara:
 *   - swatches: los colores representativos (para la preview /roadmap y
 *     las tarjetas de /paletas).
 *   - fondos: opciones de fondo claras y coherentes con la familia.
 *   - logos: colores disponibles para recolorear el isotipo/logo cuando
 *     esta paleta está activa.
 */
export interface Paleta {
	id: string;
	nombre: string;
	/** Dirección emocional / comunicativa. */
	desc: string;
	/** Tokens CSS que se aplican en :root con prefijo --color-*. */
	tokens: Record<string, string>;
	/** Swatches para mostrar (etiqueta + hex). */
	swatches: { hex: string; nombre: string }[];
	/** Opciones de fondo del sitio dentro de esta paleta. */
	fondos: { hex: string; nombre: string }[];
	/** Opciones de color para el isotipo/logo dentro de esta paleta. */
	logos: { hex: string; nombre: string }[];
}

/** Tokens por defecto del sitio (los valores oficiales de global.css).
 *  Se usan para "Restaurar" y como base antes de aplicar una paleta. */
export const defaultTokens: Record<string, string> = {
	brand: '#8c1c3f',
	'brand-dark': '#5b1133',
	accent: '#d5673f',
	indigo: '#45426d',
	night: '#14141a',
	background: '#faf8f6',
	surface: '#f6f6f8',
	divider: '#e4e4ec',
	'ink': '#2b2b34',
	'ink-strong': '#14141a',
	muted: '#6f6f7c',
	dim: '#8e8e9c',
	// Descriptores de la escala clásica vino→azul (seguían en uso en el
	// roadmap como referencia; los temas nuevos pueden sobreescribirlos).
	malbec: '#7b2a5a',
	ciruela: '#61386a',
	'azul-acero': '#324765',
	'azul-petroleo': '#2f4858',
};

export const paletas: Paleta[] = [
	/* ═══════════ BORDEAUX — “Vino de noche” ═══════════ */
	{
		id: 'bordeaux',
		nombre: 'Bordeaux de noche',
		desc: 'Vino nocturno, serio y clínico. Elegancia académica con calidez profunda.',
		tokens: {
			brand: '#a4284b',
			'brand-dark': '#521426',
			accent: '#cd325e',
			indigo: '#5b2a52',
			night: '#1b0b10',
			background: '#fdf6f8',
			surface: '#f9eef2',
			divider: '#ecd9e0',
			'ink': '#331a21',
			'ink-strong': '#1c0c11',
			muted: '#6d4550',
			dim: '#93727c',
			malbec: '#7e1f44',
			ciruela: '#6b2a5e',
			'azul-acero': '#454a63',
			'azul-petroleo': '#374a58',
		},
		swatches: [
			{ hex: '#a4284b', nombre: 'Bordeaux' },
			{ hex: '#521426', nombre: 'Bordeaux profundo' },
			{ hex: '#cd325e', nombre: 'Rosa vino' },
			{ hex: '#5b2a52', nombre: 'Ciruela' },
			{ hex: '#454a63', nombre: 'Acero' },
			{ hex: '#fdf6f8', nombre: 'Rosa humo' },
		],
		fondos: [
			{ hex: '#fdf6f8', nombre: 'A · Rosa humo' },
			{ hex: '#fbf0f4', nombre: 'B · Rosa suave' },
			{ hex: '#f8e9ef', nombre: 'C · Rosa perla' },
			{ hex: '#f4e1e9', nombre: 'D · Vaina rosada' },
		],
		logos: [
			{ hex: '#a4284b', nombre: 'Bordeaux' },
			{ hex: '#521426', nombre: 'Bordeaux profundo' },
			{ hex: '#cd325e', nombre: 'Rosa vino' },
			{ hex: '#7e1f44', nombre: 'Malbec' },
			{ hex: '#5b2a52', nombre: 'Ciruela' },
			{ hex: '#454a63', nombre: 'Acero' },
			{ hex: '#2b2228', nombre: 'Grafito' },
		],
	},

	/* ═══════════ TEAL PROFUNDO — “Marino” ═══════════ */
	{
		id: 'teal',
		nombre: 'Teal profundo',
		desc: 'Profundidad marina y cian fresco. Moderno, técnico y sereno.',
		tokens: {
			brand: '#007d99',
			'brand-dark': '#005366',
			accent: '#00a7cc',
			indigo: '#1f3b5c',
			night: '#041920',
			background: '#eefbfd',
			surface: '#e2f6fa',
			divider: '#c2eaf1',
			'ink': '#12343c',
			'ink-strong': '#082027',
			muted: '#416774',
			dim: '#78a2ab',
			malbec: '#0f6f8c',
			ciruela: '#145a77',
			'azul-acero': '#38506b',
			'azul-petroleo': '#2a4452',
		},
		swatches: [
			{ hex: '#007d99', nombre: 'Teal profundo' },
			{ hex: '#005366', nombre: 'Petróleo' },
			{ hex: '#00a7cc', nombre: 'Cian' },
			{ hex: '#1f3b5c', nombre: 'Navy' },
			{ hex: '#38506b', nombre: 'Acero' },
			{ hex: '#eefbfd', nombre: 'Cian humo' },
		],
		fondos: [
			{ hex: '#eefbfd', nombre: 'A · Cian humo' },
			{ hex: '#e4f7fa', nombre: 'B · Cian suave' },
			{ hex: '#d9f2f7', nombre: 'C · Cian perla' },
			{ hex: '#ccecf3', nombre: 'D · Vaina cian' },
		],
		logos: [
			{ hex: '#007d99', nombre: 'Teal profundo' },
			{ hex: '#005366', nombre: 'Petróleo' },
			{ hex: '#00a7cc', nombre: 'Cian' },
			{ hex: '#0f6f8c', nombre: 'Teal medio' },
			{ hex: '#1f3b5c', nombre: 'Navy' },
			{ hex: '#38506b', nombre: 'Acero' },
			{ hex: '#16242b', nombre: 'Grafito' },
		],
	},

	/* ═══════════ ROSA CEREZA — “Frambuesa” ═══════════ */
	{
		id: 'rose',
		nombre: 'Rosa cereza',
		desc: 'Rosa cereza: calidez viva y profesional, cercana al vino pero más luminosa.',
		tokens: {
			brand: '#a12b46',
			'brand-dark': '#511523',
			accent: '#c93658',
			indigo: '#5a2a52',
			night: '#1c0b10',
			background: '#fdf5f6',
			surface: '#f9ebee',
			divider: '#efd7dc',
			'ink': '#331a20',
			'ink-strong': '#1d0b11',
			muted: '#6d444e',
			dim: '#94707a',
			malbec: '#7d1f40',
			ciruela: '#662a52',
			'azul-acero': '#444763',
			'azul-petroleo': '#364a5a',
		},
		swatches: [
			{ hex: '#a12b46', nombre: 'Rosa cereza' },
			{ hex: '#511523', nombre: 'Cereza profundo' },
			{ hex: '#c93658', nombre: 'Rosa vivo' },
			{ hex: '#5a2a52', nombre: 'Ciruela' },
			{ hex: '#444763', nombre: 'Acero' },
			{ hex: '#fdf5f6', nombre: 'Rosa humo' },
		],
		fondos: [
			{ hex: '#fdf5f6', nombre: 'A · Rosa humo' },
			{ hex: '#faf0f2', nombre: 'B · Rosa suave' },
			{ hex: '#f6e8ec', nombre: 'C · Rosa perla' },
			{ hex: '#f1dfe5', nombre: 'D · Vaina rosada' },
		],
		logos: [
			{ hex: '#a12b46', nombre: 'Rosa cereza' },
			{ hex: '#511523', nombre: 'Cereza profundo' },
			{ hex: '#c93658', nombre: 'Rosa vivo' },
			{ hex: '#7d1f40', nombre: 'Malbec' },
			{ hex: '#5a2a52', nombre: 'Ciruela' },
			{ hex: '#444763', nombre: 'Acero' },
			{ hex: '#2b2126', nombre: 'Grafito' },
		],
	},

	/* ═══════════ MARFIL — “Ámbar” ═══════════ */
	{
		id: 'ivory',
		nombre: 'Marfil y ámbar',
		desc: 'Marfil y ámbar: prestigio editorial, reserva clásica y calma.',
		tokens: {
			brand: '#997500',
			'brand-dark': '#664e00',
			accent: '#cc9c00',
			indigo: '#2f4858',
			night: '#1e1a10',
			background: '#fdfbf1',
			surface: '#f7f1de',
			divider: '#e8ddbd',
			'ink': '#2e291c',
			'ink-strong': '#1a150b',
			muted: '#6e654a',
			dim: '#97906b',
			malbec: '#8a6a10',
			ciruela: '#606020',
			'azul-acero': '#55616b',
			'azul-petroleo': '#2f4858',
		},
		swatches: [
			{ hex: '#997500', nombre: 'Ocre' },
			{ hex: '#664e00', nombre: 'Ocre profundo' },
			{ hex: '#cc9c00', nombre: 'Ámbar' },
			{ hex: '#2f4858', nombre: 'Petróleo' },
			{ hex: '#55616b', nombre: 'Acero' },
			{ hex: '#fdfbf1', nombre: 'Marfil' },
		],
		fondos: [
			{ hex: '#fdfbf1', nombre: 'A · Marfil' },
			{ hex: '#faf5e3', nombre: 'B · Crema' },
			{ hex: '#f5eede', nombre: 'C · Arena' },
			{ hex: '#efe6d0', nombre: 'D · Vaina' },
		],
		logos: [
			{ hex: '#997500', nombre: 'Ocre' },
			{ hex: '#664e00', nombre: 'Ocre profundo' },
			{ hex: '#cc9c00', nombre: 'Ámbar' },
			{ hex: '#8a6a10', nombre: 'Bronce' },
			{ hex: '#2f4858', nombre: 'Petróleo' },
			{ hex: '#55616b', nombre: 'Acero' },
			{ hex: '#2a261c', nombre: 'Grafito' },
		],
	},

	/* ═══════════ AZUL PACÍFICO — “Neutro formal” ═══════════ */
	{
		id: 'pacific',
		nombre: 'Azul pacífico',
		desc: 'Azul apacible, académico y sobrio. El más neutro y formal.',
		tokens: {
			brand: '#457c87',
			'brand-dark': '#233e43',
			accent: '#579ba8',
			indigo: '#1f3548',
			night: '#0d1a1e',
			background: '#f2f8f9',
			surface: '#e5eff1',
			divider: '#cfe0e3',
			'ink': '#22383d',
			'ink-strong': '#101d21',
			muted: '#54717a',
			dim: '#83a0a8',
			malbec: '#3c7480',
			ciruela: '#3f5f78',
			'azul-acero': '#35566b',
			'azul-petroleo': '#23424f',
		},
		swatches: [
			{ hex: '#457c87', nombre: 'Azul pacífico' },
			{ hex: '#233e43', nombre: 'Abismo' },
			{ hex: '#579ba8', nombre: 'Azul claro' },
			{ hex: '#1f3548', nombre: 'Navy' },
			{ hex: '#35566b', nombre: 'Acero' },
			{ hex: '#f2f8f9', nombre: 'Azul humo' },
		],
		fondos: [
			{ hex: '#f2f8f9', nombre: 'A · Azul humo' },
			{ hex: '#eaf4f6', nombre: 'B · Azul suave' },
			{ hex: '#e1eef1', nombre: 'C · Azul perla' },
			{ hex: '#d6e7eb', nombre: 'D · Vaina azul' },
		],
		logos: [
			{ hex: '#457c87', nombre: 'Azul pacífico' },
			{ hex: '#233e43', nombre: 'Abismo' },
			{ hex: '#579ba8', nombre: 'Azul claro' },
			{ hex: '#3c7480', nombre: 'Teal suave' },
			{ hex: '#1f3548', nombre: 'Navy' },
			{ hex: '#35566b', nombre: 'Acero' },
			{ hex: '#202d38', nombre: 'Grafito' },
		],
	},
];