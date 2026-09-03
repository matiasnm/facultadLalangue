/**
 * Paletas de color candidatas para el sitio.
 *
 * La paleta ACTUAL es la vigente en src/styles/global.css. Las demás son
 * propuestas que mantienen SIEMPRE los dos rojos de marca:
 *   brand      = #8c1c3f  (vino)
 *   brand-dark = #5b1133  (vino profundo)
 *
 * Cada paleta define los tokens que TIMBRAN la identidad (el acento cálido, la
 * base neutra, la escala de profundidad y la tinta). brand / brand-dark se
 * mantienen en todas, así que no se repiten.
 *
 * Nota sobre el isotipo: el header/footer pintan el isotipo con
 * --color-accent e --color-indigo, así que al cambiar tokens se
 * republica automáticamente el logo.
 */
export interface Paleta {
	id: string;
	nombre: string;
	/** Dirección emocional / comunicativa. */
	desc: string;
	/** Tokens CSS que se aplican en :root (además de brand/brand-dark). */
	tokens: Record<string, string>;
	/** Swatches para mostrar (etiqueta + hex). */
	swatches: { hex: string; nombre: string }[];
}

export const paletas: Paleta[] = [
	/* ════════════════ ACTUAL (vigente) ═════════════════════════════════ */
	{
		id: 'actual',
		nombre: 'Actual',
		desc: 'Paleta vigente: acento naranja cálido y escala de vino a azul petróleo. Calidez + autoridad.',
		tokens: {
			'accent': '#d5673f',
			'brand-dark': '#5b1133',
			'surface': '#f6f6f8',
			'background': '#ffffff',
			'divider': '#e4e4ec',
			'ink': '#2b2b34',
			'ink-strong': '#14141a',
			'muted': '#6f6f7c',
			'malbec': '#7b2a5a',
			'ciruela': '#61386a',
			'indigo': '#45426d',
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
	},

	/* ════════════════ A · ORO VIEJO ════════════════════════════════════ */
	{
		id: 'oro-viejo',
		nombre: 'A · Oro viejo',
		desc: 'Prestigio clásico de escudo universitario / etiqueta de reserva. Uso de dorado envejecido y neutros crema.',
		tokens: {
			'accent': '#b8862c',
			'surface': '#faf7f2',
			'background': '#fffdf9',
			'divider': '#e8e0d2',
			'ink': '#3a352e',
			'ink-strong': '#241f19',
			'muted': '#7a7163',
			'malbec': '#6d2a45',
			'ciruela': '#54405c',
			'indigo': '#42455e',
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
	},

	/* ════════════════ B · SALVIA SERENA ════════════════════════════════ */
	{
		id: 'salvia',
		nombre: 'B · Salvia serena',
		desc: 'Complementario real del vino: verde salvia apagado. Look moderno, clínico y calmado.',
		tokens: {
			'accent': '#6f8163',
			'surface': '#f6f7f3',
			'background': '#fdfefb',
			'divider': '#e3e8df',
			'ink': '#2e3430',
			'ink-strong': '#161b18',
			'muted': '#697069',
			'malbec': '#6d2a45',
			'ciruela': '#4e4556',
			'indigo': '#3f4752',
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
	},

	/* ════════════════ C · TERRACOTA ════════════════════════════════════ */
	{
		id: 'terracota',
		nombre: 'C · Terracota apagado',
		desc: 'Evolución del naranja actual, desaturado y acercado a la familia del vino para que no peleen.',
		tokens: {
			'accent': '#c96f5a',
			'surface': '#f6f5f4',
			'background': '#ffffff',
			'divider': '#e9e2dc',
			'ink': '#332d2b',
			'ink-strong': '#1a1614',
			'muted': '#756a64',
			'malbec': '#7b2a5a',
			'ciruela': '#61386a',
			'indigo': '#45426d',
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
	},

	/* ════════════════ D · ACERO + BRONCE ═══════════════════════════════ */
	{
		id: 'acero-bronce',
		nombre: 'D · Acero + bronce',
		desc: 'Conserva la escala púrpura→azul, sube el acento a un bronce y mantiene neutros fríos. Sobriedad técnica.',
		tokens: {
			'accent': '#9c7c3e',
			'surface': '#f3f4f7',
			'background': '#ffffff',
			'divider': '#e0e2ea',
			'ink': '#2b2b34',
			'ink-strong': '#14141a',
			'muted': '#6f6f7c',
			'malbec': '#7b2a5a',
			'ciruela': '#61386a',
			'indigo': '#45426d',
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
	},
];
