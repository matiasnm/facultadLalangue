/**
 * Paletas de color disponibles para el sitio.
 *
 * Dado el selector dispuesto en /roadmap — "Editor de paleta en vivo" — son
 * 7 paletas en dos grupos:
 *
 *   1. Las CANDIDATAS CLÁSICAS (Actual + A·Oro viejo, B·Salvia serena,
 *      C·Terracota apagado, D·Acero + bronce): todas mantienen la marca
 *      vino fija (brand #8c1c3f, brand-dark #5b1133) y varían el acento,
 *      los neutros y la escala. Como comparten la marca, el tema activo se
 *      detecta por brand + accent.
 *
 *   2. Dos duplas ROJO + VERDE construidas con la escala original exacta:
 *      night-bordeaux · dark-teal · cherry-rose · ivory-mist · pacific-blue.
 *
 * Cada paleta define los TOKENS COMPLETOS que se aplican en :root — marca,
 * acento, tinta, neutros y fondo. Al elegir una paleta se repinta todo el
 * sitio (header, footer, isotipo, textos) porque todos los componentes
 * consumen las variables CSS --color-*.
 *
 * Además de los tokens, cada paleta declara:
 *   - swatches: los colores representativos (preview y tarjetas del editor).
 *   - logos: colores disponibles para recolorear el isotipo/logo cuando
 *     esta paleta está activa.
 *
 * NOTA: el color de fondo YA NO depende de la paleta. Se elige aparte
 * (roadmap → "Color de fondo") entre blancos fijos próximos al blanco puro,
 * para preservar la legibilidad. Aunque los tokens de cada paleta traen un
 * `background`, aplicar una paleta no lo usa: applyPalette lo reemplaza por
 * la elección vigente (ver script del editor en roadmap.astro).
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
	// Escala clásica vino→azul (seguía en uso en el roadmap como referencia).
	malbec: '#7b2a5a',
	ciruela: '#61386a',
	'azul-acero': '#324765',
	'azul-petroleo': '#2f4858',
};

export const paletas: Paleta[] = [
	/* ═══════════ CANDIDATAS CLÁSICAS (marca vino fija) ═══════════ */
	{
		id: 'actual',
		nombre: 'Actual',
		desc: 'Paleta vigente: acento naranja cálido y escala de vino a azul petróleo. Calidez + autoridad.',
		tokens: {
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
			malbec: '#7b2a5a',
			ciruela: '#61386a',
			'azul-acero': '#324765',
			'azul-petroleo': '#2f4858',
		},
		swatches: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#d5673f', nombre: 'Naranja cálido' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#2f4858', nombre: 'Azul petróleo' },
			{ hex: '#f6f6f8', nombre: 'Humo' },
		],
		logos: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#d5673f', nombre: 'Naranja cálido' },
			{ hex: '#7b2a5a', nombre: 'Malbec' },
			{ hex: '#61386a', nombre: 'Ciruela' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#324765', nombre: 'Azul acero' },
			{ hex: '#2f4858', nombre: 'Azul petróleo' },
			{ hex: '#14141a', nombre: 'Negro noche' },
			{ hex: '#454560', nombre: 'Gris pizarra' },
			{ hex: '#8e8e9c', nombre: 'Gris perla' },
		],
	},

	/* Oro viejo */
	{
		id: 'oro-viejo',
		nombre: 'A · Oro viejo',
		desc: 'Prestigio clásico de escudo universitario / etiqueta de reserva. Dorado envejecido y neutros crema.',
		tokens: {
			brand: '#8c1c3f',
			'brand-dark': '#5b1133',
			accent: '#b8862c',
			indigo: '#42455e',
			night: '#1d1812',
			background: '#fffdf9',
			surface: '#faf7f2',
			divider: '#e8e0d2',
			'ink': '#3a352e',
			'ink-strong': '#241f19',
			muted: '#7a7163',
			dim: '#9d9282',
			malbec: '#6d2a45',
			ciruela: '#54405c',
			'azul-acero': '#3a4a5c',
			'azul-petroleo': '#2f4852',
		},
		swatches: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#b8862c', nombre: 'Oro envejecido' },
			{ hex: '#42455e', nombre: 'Índigo' },
			{ hex: '#faf7f2', nombre: 'Crema' },
			{ hex: '#7a7163', nombre: 'Taupe cálido' },
		],
		logos: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#b8862c', nombre: 'Oro envejecido' },
			{ hex: '#6d2a45', nombre: 'Malbec' },
			{ hex: '#54405c', nombre: 'Ciruela' },
			{ hex: '#42455e', nombre: 'Índigo' },
			{ hex: '#2f4852', nombre: 'Azul petróleo' },
			{ hex: '#241f19', nombre: 'Grafito' },
		],
	},

	/* Salvia serena */
	{
		id: 'salvia',
		nombre: 'B · Salvia serena',
		desc: 'Complementario real del vino: verde salvia apagado. Look moderno, clínico y calmado.',
		tokens: {
			brand: '#8c1c3f',
			'brand-dark': '#5b1133',
			accent: '#6f8163',
			indigo: '#3f4752',
			night: '#141a17',
			background: '#fdfefb',
			surface: '#f6f7f3',
			divider: '#e3e8df',
			'ink': '#2e3430',
			'ink-strong': '#161b18',
			muted: '#697069',
			dim: '#8f958d',
			malbec: '#6d2a45',
			ciruela: '#4e4556',
			'azul-acero': '#374a58',
			'azul-petroleo': '#2c4850',
		},
		swatches: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#6f8163', nombre: 'Verde salvia' },
			{ hex: '#3f4752', nombre: 'Pizarra' },
			{ hex: '#f6f7f3', nombre: 'Humo verdoso' },
			{ hex: '#697069', nombre: 'Topo' },
		],
		logos: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#6f8163', nombre: 'Verde salvia' },
			{ hex: '#6d2a45', nombre: 'Malbec' },
			{ hex: '#4e4556', nombre: 'Ciruela' },
			{ hex: '#3f4752', nombre: 'Índigo pizarra' },
			{ hex: '#2c4850', nombre: 'Azul petróleo' },
			{ hex: '#161b18', nombre: 'Grafito' },
		],
	},

	/* Terracota apagado */
	{
		id: 'terracota',
		nombre: 'C · Terracota apagado',
		desc: 'Evolución del naranja actual, desaturado y acercado a la familia del vino para que no peleen.',
		tokens: {
			brand: '#8c1c3f',
			'brand-dark': '#5b1133',
			accent: '#c96f5a',
			indigo: '#45426d',
			night: '#191716',
			background: '#ffffff',
			surface: '#f6f5f4',
			divider: '#e9e2dc',
			'ink': '#332d2b',
			'ink-strong': '#1a1614',
			muted: '#756a64',
			dim: '#948b85',
			malbec: '#7b2a5a',
			ciruela: '#61386a',
			'azul-acero': '#324765',
			'azul-petroleo': '#2f4858',
		},
		swatches: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#c96f5a', nombre: 'Terracota' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#f6f5f4', nombre: 'Humo cálido' },
			{ hex: '#756a64', nombre: 'Taupe' },
		],
		logos: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#c96f5a', nombre: 'Terracota' },
			{ hex: '#7b2a5a', nombre: 'Malbec' },
			{ hex: '#61386a', nombre: 'Ciruela' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#2f4858', nombre: 'Azul petróleo' },
			{ hex: '#1a1614', nombre: 'Grafito' },
		],
	},

	/* Acero + bronce */
	{
		id: 'acero-bronce',
		nombre: 'D · Acero + bronce',
		desc: 'Conserva la escala púrpura→azul, sube el acento a un bronce y mantiene neutros fríos. Sobriedad técnica.',
		tokens: {
			brand: '#8c1c3f',
			'brand-dark': '#5b1133',
			accent: '#9c7c3e',
			indigo: '#45426d',
			night: '#14141a',
			background: '#ffffff',
			surface: '#f3f4f7',
			divider: '#e0e2ea',
			'ink': '#2b2b34',
			'ink-strong': '#14141a',
			muted: '#6f6f7c',
			dim: '#8e8e9c',
			malbec: '#7b2a5a',
			ciruela: '#61386a',
			'azul-acero': '#324765',
			'azul-petroleo': '#2f4858',
		},
		swatches: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#9c7c3e', nombre: 'Bronce' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#2f4858', nombre: 'Azul petróleo' },
			{ hex: '#f3f4f7', nombre: 'Acero' },
		],
		logos: [
			{ hex: '#8c1c3f', nombre: 'Vino' },
			{ hex: '#5b1133', nombre: 'Vino profundo' },
			{ hex: '#9c7c3e', nombre: 'Bronce' },
			{ hex: '#7b2a5a', nombre: 'Malbec' },
			{ hex: '#61386a', nombre: 'Ciruela' },
			{ hex: '#45426d', nombre: 'Índigo' },
			{ hex: '#2f4858', nombre: 'Azul petróleo' },
			{ hex: '#14141a', nombre: 'Grafito' },
		],
	},

	/* ═══════════ DUPLAS ROJO + VERDE (escala original exacta) ═══════════ */
	/* 1 · BORDEAUX NOCHE + VERDE PETRÓLEO — usa night-bordeaux #4f1324,
	 *    dark-teal #00495a, ivory-mist #fff9e5 y cherry-rose #9d2a45. */
	{
		id: 'rojo-teal',
		nombre: 'Bordeaux noche & verde petróleo',
		desc: 'Rojo de la escala original (night-bordeaux) con el verde dark-teal de contraste sobre base marfil. Serio, vitivinícola y sobrio.',
		tokens: {
			brand: '#4f1324',
			'brand-dark': '#360d1a',
			accent: '#00495a',
			indigo: '#2f6b78',
			night: '#1c0e0d',
			background: '#fff9e5',
			surface: '#f8f1da',
			divider: '#e6dcc0',
			'ink': '#2c2a1f',
			'ink-strong': '#161409',
			muted: '#6f6a56',
			dim: '#98937e',
			malbec: '#9d2a45',
			ciruela: '#3e5a64',
			'azul-acero': '#62858c',
			'azul-petroleo': '#00495a',
		},
		swatches: [
			{ hex: '#4f1324', nombre: 'Bordeaux noche' },
			{ hex: '#360d1a', nombre: 'Bordeaux oscuro' },
			{ hex: '#9d2a45', nombre: 'Cereza' },
			{ hex: '#00495a', nombre: 'Verde petróleo' },
			{ hex: '#7eb2bc', nombre: 'Pacífico' },
			{ hex: '#fff9e5', nombre: 'Marfil' },
		],
		logos: [
			{ hex: '#4f1324', nombre: 'Bordeaux noche' },
			{ hex: '#360d1a', nombre: 'Bordeaux oscuro' },
			{ hex: '#9d2a45', nombre: 'Cereza' },
			{ hex: '#00495a', nombre: 'Verde petróleo' },
			{ hex: '#2f6b78', nombre: 'Petróleo profundo' },
			{ hex: '#7eb2bc', nombre: 'Pacífico' },
			{ hex: '#1c0e0d', nombre: 'Grafito' },
		],
	},

	/* 2 · CEREZA + PACÍFICO — usa cherry-rose #9d2a45, pacific-blue
	 *    #7eb2bc, ivory-mist #fff9e5 y dark-teal #00495a. */
	{
		id: 'cereza-pacifico',
		nombre: 'Cereza & pacífico',
		desc: 'El rojo cherry-rose de la escala original con el azul-verde pacific-blue sobre marfil. Más luminoso y fresco.',
		tokens: {
			brand: '#9d2a45',
			'brand-dark': '#6f1c31',
			accent: '#7eb2bc',
			indigo: '#00495a',
			night: '#1a0810',
			background: '#fff9e5',
			surface: '#f8f0e0',
			divider: '#e7dcc6',
			'ink': '#2d2b21',
			'ink-strong': '#16130c',
			muted: '#6f6a58',
			dim: '#9a9584',
			malbec: '#4f1324',
			ciruela: '#23515d',
			'azul-acero': '#62858c',
			'azul-petroleo': '#00495a',
		},
		swatches: [
			{ hex: '#9d2a45', nombre: 'Cereza' },
			{ hex: '#6f1c31', nombre: 'Cereza oscura' },
			{ hex: '#4f1324', nombre: 'Bordeaux noche' },
			{ hex: '#7eb2bc', nombre: 'Pacífico' },
			{ hex: '#00495a', nombre: 'Verde petróleo' },
			{ hex: '#fff9e5', nombre: 'Marfil' },
		],
		logos: [
			{ hex: '#9d2a45', nombre: 'Cereza' },
			{ hex: '#6f1c31', nombre: 'Cereza oscura' },
			{ hex: '#4f1324', nombre: 'Bordeaux noche' },
			{ hex: '#7eb2bc', nombre: 'Pacífico' },
			{ hex: '#00495a', nombre: 'Verde petróleo' },
			{ hex: '#62858c', nombre: 'Acero' },
			{ hex: '#1a0810', nombre: 'Grafito' },
		],
	},
];