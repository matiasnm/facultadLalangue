/**
 * Catálogo de componentes comunes — Parte I de docs/formaciones-contenido.md.
 *
 * Cada componente define UNA VEZ los bloques que se repiten en varias páginas
 * de formación (`{{NOMBRE}}` en el doc). Las páginas no repiten texto: citan
 * el componente con `{ tipo: 'componente', nombre }` y el RENDER decide el
 * diseño. Si se cambia el diseño de un tipo de bloque, todas las páginas se
 * actualizan porque todas pasan por los mismos componentes de render
 * (src/components/formacion/).
 *
 * Formato de texto enriquecido (lo interpreta Rico.astro):
 *   **negrita** · *cursiva* · [etiqueta](url) — url externa se abre en otra
 *   pestaña; url interna ("/…") recibe la base pública automáticamente.
 */
export type BloqueTitulo = {
	tipo: 'titulo';
	texto: string;
	nivel?: 2 | 3 | 4;
	kicker?: string;
	/** Ancla opcional para atajos internos (p. ej. `id="precios"`). */
	id?: string;
};
export type BloqueTexto = { tipo: 'texto'; parrafos: string[] };
export type BloqueLista = {
	tipo: 'lista';
	items: string[];
	ordenada?: boolean;
	/** true → cada ítem lleva el check en círculo (ícono establecido del sitio). */
	conIconos?: boolean;
};
export type BloqueChips = {
	tipo: 'chips';
	items: string[];
	variante?: 'insignia' | 'sello' | 'lema';
};
export type BloqueContadores = {
	tipo: 'contadores';
	items: { valor: string; etiqueta: string }[];
};
export type BloqueBeneficio = {
	tipo: 'beneficio';
	titulo: string;
	subtitulo: string;
	descripcion: string;
	precio: string;
};
export type BloqueTotalBeneficios = {
	tipo: 'total-beneficios';
	titulo: string;
	valor: string;
	nota: string;
	/** Cierre de la tarjeta (se renderiza SOLO en el layout 'secciones'):
	 *  reemplaza la `nota` por un h2 + texto + botón de entrevista, igual
	 *  que el cierre del bloque de beneficios en la landing del Máster. */
	cierre?: {
		encabezado: string;
		texto: string;
		accion: { etiqueta: string; href: string };
	};
};
/**
 * Grid de beneficios "exclusivos alumnos" — mismo diseño que la landing del
 * Máster (#Beneficios exclusivos alumnos): una grilla de tarjetas (3 columnas
 * en desktop, 2 en tablet, 1 en mobile) separadas por líneas de 1px sobre un
 * fondo, sin border radius, donde cada tarjeta "se ilumina" (fondo más claro
 * + línea brand en su borde inferior) al pasar el cursor.
 * - Todas las tarjetas miden lo mismo (auto-rows-fr), sin importar el texto.
 * - El precio va abajo a la derecha, a la misma distancia del borde.
 * - Los títulos se enumeran 1., 2., 3., … según su posición en el grid.
 */
export type BloqueBeneficios = {
	tipo: 'beneficios';
	items: BloqueBeneficio[];
	/** Columnas en desktop: 3 (seis beneficios) o 2 (cuatro o menos). */
	columnas?: 2 | 3;
};
export type BloqueCita = { tipo: 'cita'; lineas: string[]; autor: string };
export type BloqueStats = {
	tipo: 'stats';
	/** Título opcional que se renderiza DENTRO de la sección (layout
	 *  'secciones' de las páginas de formación). Es parte del componente:
	 *  las páginas NO declaran un `titulo` suelto para la banda. */
	titulo?: string;
	filas: { region: string; pct: string }[];
	frases: string[];
	referencia: string;
};
export type BloqueFaq = {
	tipo: 'faq';
	pregunta: string;
	respuesta: string[];
	lista?: string[];
	cierre?: string[];
};
export type BloqueCta = {
	tipo: 'cta';
	titulo: string;
	subtitulo?: string;
	acciones: { etiqueta: string; href: string }[];
};
export type BloqueEnlace = {
	tipo: 'enlace';
	etiqueta: string;
	href: string;
	/** true → se renderiza como botón sólido (brand) en vez de link subrayado. */
	boton?: boolean;
};
export type BloquePersona = {
	tipo: 'persona';
	nombre: string;
	titulo?: string;
	bio: string[];
	foto?: string;
	boton?: { etiqueta: string; href: string };
};
export type BloqueEquipo = {
	tipo: 'equipo';
	personas: { nombre: string; titulo?: string; bio?: string[]; foto?: string }[];
	columnas?: 2 | 3 | 4;
	/** true → cada card abre un popup de perfil (ModalPersona). */
	modal?: boolean;
	/** true → las cards se muestran con retrato grande (~300px) en vez de círculo chico. */
	fotoGrande?: boolean;
};
export type BloqueTarjetas = {
	tipo: 'tarjetas';
	items: { titulo?: string; descripcion?: string; href?: string; imagen?: string }[];
	/** Columnas en desktop: 2 (pares de cards de texto, p. ej. "Salida laboral") o 3 (por defecto, grilla de formaciones). */
	columnas?: 2 | 3;
};
/**
 * Tarjeta "dirigido-a" — dos columnas que se miran ("Es para ti si" / "No es para
 * ti si"), con borde redondeado hacia el interior del par, más un cierre
 * centrado con texto y botón (p. ej. el acceso a la beca).
 * Estilo tomado de la landing del Máster (sección #paraTi).
 */
export type BloqueDirigidoA = {
	tipo: 'dirigido-a';
	positivos: { titulo: string; items: string[] };
	negativos: { titulo: string; items: string[] };
	/** Cierre centrado debajo de las columnas. */
	pie: {
		texto: string;
		boton: { etiqueta: string; href: string };
	};
};
/**
 * Carrusel de logos — marquee CSS infinito con pausa en hover. La lista se
 * duplica para que la animación sea continua sin saltos. Usado para
 * "Instituciones asociadas" (logos en blanco y negro de las instituciones
 * afiliadas).
 */
export type BloqueCarruselLogos = {
	tipo: 'carrusel-logos';
	logos: { src: string; alt: string; href?: string }[];
};

/**
 * Admisión — sección de admisión y matrícula con fondo ancho (imagen oscura
 * filtrada con los colores de la paleta del sitio). 2 columnas: título + lista
 * de requisitos a la izquierda, cartel de matrícula anual a la derecha.
 */
export type BloqueAdmision = {
	tipo: 'admision';
	fondo: string;
	izqTitulo: string;
	izqTexto?: string; // párrafo introductorio opcional bajo el título (columna izquierda)
	izqBullets: string[];
	derTitulo: string;
	derContenido: string[];
};

/**
 * Articula — sección "… articula:" que presenta los ejes de la formación.
 * Copia simplificada del bloque de articulación del landing original (Elementor):
 * fondo full-bleed en gradiente claro (blanco → superficie), título h2 centrado,
 * columna izquierda con el lema institucional (cada lema: frase arriba y la
 * palabra clave `**negrita**` abajo, grande, en Roboto Serif vino, con un
 * separador vino a la izquierda) y columna derecha con los N ejes numerados
 * (número brand en Montserrat + texto) que cubre todo el alto del contenedor.
 * En mobile el orden se invierte (primero los ejes, luego el lema).
 */
export type BloqueArticula = {
	tipo: 'articula';
	titulo: string;
	/** Líneas del mensaje fijo (columna izquierda); `**palabra**` = acento. */
	lema: string[];
	/** Ejes numerados de la columna derecha. */
	puntos: string[];
};

/** Iconos minimalistas (trazo fino, sin relleno) de los pilares de la facultad. */
export type IconoFacultad = 'globo' | 'docentes' | 'certificado' | 'comunidad' | 'insercion' | 'clinica';

/**
 * Facultad — bloque institucional compacto. 2 columnas: a la izquierda el logo
 * y el eslogan "Primera y única facultad…", a la derecha los párrafos de la
 * formación; abajo, la grilla de 6 pilares con iconos minimalistas. Copia
 * simplificada y más chica de las secciones #et-main-area 94c731f (columnas)
 * y 61e4cdb (pills) de la landing. La imagen central del original no se usa.
 */
export type BloqueFacultad = {
	tipo: 'facultad';
	logo: string;
	/** Eslogan bajo el logo; `**negrita**` = acento en vino. */
	eslogan: string;
	/** Párrafos de la columna derecha (específicos de cada formación). */
	parrafos: string[];
	pilares: { icono: IconoFacultad; texto: string }[];
};

/** Iconos minimalistas (trazo fino, sin relleno) de la modalidad metodológica. */
export type IconoMetodologia = 'clase' | 'grabaciones' | 'supervision' | 'casos' | 'salida' | 'comunidad' | 'investigacion';

/**
 * Metodología — bloque de modalidad de cursada: igual estructura que
 * "articula…" pero con un video en la columna derecha (placeholder por ahora,
 * sin src). Columna izquierda con los sellos de metodología (frase arriba y
 * la palabra `**negrita**` debajo, en Roboto Serif vino, alineado a la
 * izquierda) y debajo la grilla gris de bullets de modalidad (2 columnas)
 * con iconos minimalistas del mismo tipo que los del bloque Facultad.
 */
export type BloqueMetodologia = {
	tipo: 'metodologia';
	titulo: string;
	/** Sellos de metodología; `**palabra**` = acento. */
	lema: string[];
	/** Bullets de modalidad de la grilla gris (icono + texto). */
	puntos: { icono: IconoMetodologia; texto: string }[];
};

/** Un logo de carrusel: `src` + `alt` (y `href` opcional al sitio). */
export type Logo = { src: string; alt: string; href?: string };

/**
 * Profesores — sección de docentes de cada formación. Copia de la sección
 * #profesores de la landing del Máster: carrusel automático de logos de las
 * universidades e instituciones de procedencia (marquee CSS), slider de fotos
 * de profesores con flechas y autoplay (sin puntitos) que cierra con una
 * tarjeta CTA al plantel académico, y el cierre "También los leíste en"
 * (medios, marquee CSS). Las universidades y los medios vienen por default
 * (UNIVERSIDADES_PROFESORES y MEDIOS_TAMBIEN, los mismos en todas); cada
 * formación solo pasa su título y su lista de docentes.
 */
export type BloqueProfesores = {
	tipo: 'profesores';
	titulo: string;
	/** Intro de la sección (default: PROFESORES_INTRO, la misma en todas). */
	intro?: string;
	universidades: Logo[];
	/** Docentes con su foto (`/conocenos/<nombre>.webp`). */
	profesores: { foto: string; nombre: string }[];
	medios: Logo[];
	/** Ruta interna del plantel académico (tarjeta "más referentes"). */
	masReferentesHref?: string;
};

/**
 * Módulos de Clases — sección full-bleed copiada de la landing del Máster
 * ("Módulos de Clases"): fondo claro de ancho total, título centrado, intro
 * (Rico) y un carrusel A ANCHO COMPLETO de las cards de cada módulo (imagen
 * 16:9 + nombre). Las cards se deslizan solas: animación automática (autoplay
 * de 4s, pausa al hover/foco, off con prefers-reduced-motion), sin flechas;
 * también se arrastran con el dedo o el ratón (scroll-snap). Cada card es una
 * figura (imagen + título); el único margen está en el figcaption, donde vive
 * el texto.
 */
export type BloqueModulos = {
	tipo: 'modulos';
	titulo: string;
	/** Cards de módulo: la imagen (`/modulos_clases/*.webp`) y su nombre. */
	modulos: { foto: string; nombre: string }[];
	/** Intro de la sección (acepta **negrita** y [enlaces](#ancla)). */
	intro?: string;
	/** Enlace opcional debajo del carrusel (p. ej. "Programa académico"). */
	enlace?: { etiqueta: string; href: string };
};

/**
 * Certificación — sección full-bleed copiada de la sección #certificacion de
 * la landing del Máster: fondo claro de ancho total, título a la izquierda con
 * el párrafo institucional (intro, formato Rico), los puntos con check y el
 * botón opcional; a la derecha el diploma de muestra (imagen /diplomas/*.png)
 * con su nota al pie. Estructura mínima: la section tiene UN solo contenedor
 * central con el padding; dentro un grid de 2 columnas (texto | figura).
 */
export type BloqueCertificacion = {
	tipo: 'certificacion';
	titulo: string;
	/** Párrafo institucional (Rico): qué es FIPP Lalangue y sus avales. */
	intro: string;
	/** Puntos con check (p. ej. "Certificación internacional con reconocimiento académico y clínico."). */
	puntos: string[];
	/** Diploma de muestra: `/diplomas/*.png`. */
	foto: string;
	/** Botón opcional (p. ej. "Programa académico" → PDF del plan). */
	enlace?: { etiqueta: string; href: string };
	/** Nota opcional bajo los puntos (p. ej. "*El ejercicio profesional…"). */
	nota?: string;
	/** Nota opcional bajo el diploma (p. ej. "*Diploma de muestra."). */
	notaDiploma?: string;
};

/**
 * Columnas — layout de dos columnas (2/3 + 1/3 en desktop) que anida bloques.
 * `primera` es la columna ancha por defecto ('2-1'); `fondoPrimera` tiñe su
 * panel para contrastar (p. ej. la zona de cards de "Salida laboral
 * internacional"). En mobile las columnas se apilan.
 */
export type BloqueColumna = {
	tipo: 'columnas';
	primera: Bloque[];
	segunda: Bloque[];
	/** Reparto en desktop: '2-1' (default) o '1-2'. */
	split?: '2-1' | '1-2';
	/** Fondo del panel de la primera columna (contraste). */
	fondoPrimera?: 'brand' | 'muted';
};

export type Bloque =
	| BloqueTitulo
	| BloqueTexto
	| BloqueLista
	| BloqueChips
	| BloqueContadores
	| BloqueBeneficio
	| BloqueBeneficios
	| BloqueTotalBeneficios
	| BloqueCita
	| BloqueStats
	| BloqueFaq
	| BloqueCta
	| BloqueEnlace
	| BloquePersona
	| BloqueEquipo
	| BloqueTarjetas
	| BloqueColumna
	| BloqueDirigidoA
	| BloqueCarruselLogos
	| BloqueAdmision
	| BloqueArticula
	| BloqueFacultad
	| BloqueMetodologia
	| BloqueProfesores
	| BloqueModulos
	| BloqueCertificacion;

/** Un bloque de página: o cita un componente común o es un bloque directo. */
export type BloquePagina = { tipo: 'componente'; nombre: ComponenteId } | Bloque;

/**
 * Sección de una formación (layout 'secciones', presente en TODAS las páginas
 * de formación): un grupo de bloques que se renderiza dentro de UN SOLO
 * <section> apilado. Las secciones NO llevan márgenes entre sí: cada una paga
 * su propio padding vertical (y su fondo cuando corresponde) y los bloques
 * internos solo guardan ritmo entre ellos. El orden canónico se mantiene.
 */
export type SeccionPagina = {
	bloques: BloquePagina[];
};

export interface ComponenteComun {
	id: ComponenteId;
	/** Referencia al doc (solo para auditoría, no se renderiza). */
	nota?: string;
	bloques: Bloque[];
}

/* ------------------------------------------------------------------ */
/* Helpers de construcción (evitan ruido entre los datos)              */
/* ------------------------------------------------------------------ */
export const titulo = (texto, nivel = 2, kicker?, id?) => ({ tipo: 'titulo', texto, nivel, kicker, id });
export const texto = (parrafos) =>
	({ tipo: 'texto', parrafos: Array.isArray(parrafos) ? parrafos : [parrafos] }) as BloqueTexto;
export const lista = (items, ordenada = false, conIconos = false) =>
	({ tipo: 'lista', items, ordenada, conIconos: conIconos || undefined }) as BloqueLista;
export const chips = (items, variante = 'sello') => ({ tipo: 'chips', items, variante }) as BloqueChips;
export const contadores = (items) => ({ tipo: 'contadores', items }) as BloqueContadores;
export const beneficio = ({ titulo, subtitulo, descripcion, precio }) =>
	({ tipo: 'beneficio', titulo, subtitulo, descripcion, precio }) as BloqueBeneficio;
export const beneficios = (items, columnas = 3) =>
	({ tipo: 'beneficios', items, columnas }) as BloqueBeneficios;
export const carruselLogos = (logos) =>
	({ tipo: 'carrusel-logos', logos }) as BloqueCarruselLogos;
export const totalBeneficios = (titulo, valor, nota, cierre?) =>
	({ tipo: 'total-beneficios', titulo, valor, nota, cierre }) as BloqueTotalBeneficios;
export const cita = (lineas, autor) => ({ tipo: 'cita', lineas, autor }) as BloqueCita;
export const stats = ({ titulo, filas, frases, referencia }) =>
	({ tipo: 'stats', titulo, filas, frases, referencia }) as BloqueStats;
export const faq = (pregunta, respuesta, lista, cierre) =>
	({
		tipo: 'faq',
		pregunta,
		respuesta: Array.isArray(respuesta) ? respuesta : [respuesta],
		lista,
		cierre,
	}) as BloqueFaq;
export const cta = ({ titulo, subtitulo, acciones }) =>
	({ tipo: 'cta', titulo, subtitulo, acciones }) as BloqueCta;
export const enlace = (etiqueta, href, boton = false) =>
	({ tipo: 'enlace', etiqueta, href, boton: boton || undefined }) as BloqueEnlace;
export const persona = (nombre, titulo, bio, foto?, boton?) =>
	({
		tipo: 'persona',
		nombre,
		titulo,
		bio: Array.isArray(bio) ? bio : [bio],
		foto,
		boton,
	}) as BloquePersona;
export const equipo = (personas, columnas = 3, modal = false, fotoGrande = false) =>
	({ tipo: 'equipo', personas, columnas, modal: modal || undefined, fotoGrande: fotoGrande || undefined }) as BloqueEquipo;
export const tarjetas = (items, columnas = 3) =>
	({ tipo: 'tarjetas', items, columnas }) as BloqueTarjetas;
/** Dos columnas (2/3 + 1/3 por defecto) con bloques anidados en cada una. */
export const columnas = (primera, segunda, split = '2-1', fondoPrimera) =>
	({ tipo: 'columnas', primera, segunda, split, fondoPrimera }) as BloqueColumna;
export const dirigidoA = (positivos, negativos, pie) =>
	({ tipo: 'dirigido-a', positivos, negativos, pie }) as BloqueDirigidoA;
export const admision = (fondo, izqTitulo, izqBullets, derTitulo, derContenido, izqTexto?) =>
	({ tipo: 'admision', fondo, izqTitulo, izqTexto, izqBullets, derTitulo, derContenido }) as BloqueAdmision;
/** Lema institucional de la sección "articula:" (mismo en las 6 formaciones). */
export const LEMA_ARTICULACION = [
	'Abriendo grietas en lo **Establecido**',
	'Rigurosos en los **Fundamentos**',
	'Atentos al **Porvenir**',
];
export const articula = (titulo, puntos, lema = LEMA_ARTICULACION) =>
	({ tipo: 'articula', titulo, lema, puntos }) as BloqueArticula;
/** Logo del encabezado institucional (bloque Facultad). */
export const LOGO_FACULTAD = '/logo.svg';
/** Eslogan del bloque Facultad (mismo en las 6 formaciones). */
export const ESLOGAN_FACULTAD = 'Primera y única facultad con **Grupos de Supervisión y de Estudio Gratuitos**.';
/** 6 pilares de respaldo institucional (icono + texto), compartidos por todas. */
export const PILARES_FACULTAD: { icono: IconoFacultad; texto: string }[] = [
	{ icono: 'globo', texto: 'Institución con trayectoria internacional.' },
	{ icono: 'docentes', texto: 'Cuerpo docente con experiencia clínica y académica.' },
	{ icono: 'certificado', texto: 'Certificación internacional. (EFPP | APE | FEDE | DREETS)' },
	{ icono: 'comunidad', texto: 'Comunidad activa de formación y supervisión.' },
	{ icono: 'insercion', texto: 'Acompañamiento para tu inserción laboral internacional.' },
	{ icono: 'clinica', texto: 'Prácticas clínicas supervisadas y rentadas.' },
];
export const facultad = (logo, eslogan, parrafos, pilares = PILARES_FACULTAD) =>
	({ tipo: 'facultad', logo, eslogan, parrafos, pilares }) as BloqueFacultad;
/** Sellos de metodología del bloque `metodologia` (mismos en las 6 formaciones). */
export const LEMA_METODOLOGIA = [
	'Primera y única facultad con **Supervisiones Gratuitas**',
	'Primera Comunidad Internacional activa, **+ de 7000 miembros**',
	'Modalidad 100% **Online y Flexible**',
];
/** Modalidad A — 6 bullets (Máster, Psicoterapia, Subjetividad, Metapsicología). */
export const MODALIDAD_A: { icono: IconoMetodologia; texto: string }[] = [
	{ icono: 'clase', texto: 'Clases sincrónicas' },
	{ icono: 'grabaciones', texto: 'Clases grabadas' },
	{ icono: 'supervision', texto: 'Prácticas supervisadas' },
	{ icono: 'casos', texto: 'Discusión de casos clínicos reales' },
	{ icono: 'salida', texto: 'Salida Laboral Internacional' },
	{ icono: 'comunidad', texto: 'Comunidad académica internacional activa' },
];
/** Modalidad B — variante de Parejas/Infanto-Juvenil: primer ítem "Clases
 * teóricas en vivo" y el bullet de casos fusionado con investigación (6 ítems). */
export const MODALIDAD_B: { icono: IconoMetodologia; texto: string }[] = [
	{ icono: 'clase', texto: 'Clases teóricas en vivo' },
	{ icono: 'grabaciones', texto: 'Clases grabadas' },
	{ icono: 'supervision', texto: 'Prácticas supervisadas' },
	{ icono: 'casos', texto: 'Espacios de investigación y Discusión de casos clínicos' },
	{ icono: 'salida', texto: 'Salida Laboral Internacional' },
	{ icono: 'comunidad', texto: 'Comunidad académica internacional activa' },
];
export const metodologia = (titulo, puntos, lema = LEMA_METODOLOGIA) =>
	({ tipo: 'metodologia', titulo, lema, puntos }) as BloqueMetodologia;
/** Intro de la sección de profesores (idéntica en todas las formaciones). */
export const PROFESORES_INTRO =
	'Nuestros docentes cuentan con trayectoria en universidades y espacios de formación de Europa y América Latina, así como en instituciones clínicas y asociaciones profesionales internacionales.';

/** Universidades e instituciones de procedencia (las mismas en todas las
 *  formaciones). Cada logo enlaza al sitio de la institución en pestaña nueva. */
export const UNIVERSIDADES_PROFESORES: Logo[] = [
	{ src: '/logos_universidades/universidad_de_granada.webp', alt: 'Universidad de Granada', href: 'https://www.ugr.es/' },
	{ src: '/logos_universidades/universidad_de_buenos_aires.webp', alt: 'Universidad de Buenos Aires', href: 'https://www.uba.ar/' },
	{ src: '/logos_universidades/universidad_catolica_argentina.webp', alt: 'Universidad Católica Argentina', href: 'https://uca.edu.ar/' },
	{ src: '/logos_universidades/asociacion_argentina_de_salud_mental.webp', alt: 'Asociación Argentina de Salud Mental', href: 'https://www.aasm.org.ar/' },
	{ src: '/logos_universidades/universidad_abierta_interamericana.webp', alt: 'Universidad Abierta Interamericana', href: 'https://www.uai.edu.ar/' },
	{ src: '/logos_universidades/universidad_de_la_marina_mercante.webp', alt: 'Universidad de la Marina Mercante', href: 'https://www.udemm.edu.ar/' },
	{ src: '/logos_universidades/clacso.webp', alt: 'Consejo Latinoamericano de Ciencias Sociales — CLACSO', href: 'https://www.clacso.org/' },
	{ src: '/logos_universidades/utn.webp', alt: 'Universidad Tecnológica Nacional', href: 'https://www.utn.edu.ar/' },
	{ src: '/logos_universidades/universidad_del_aconcagua.webp', alt: 'Universidad del Aconcagua', href: 'https://www.uda.edu.ar/' },
	{ src: '/logos_universidades/universidad_salesiana.webp', alt: 'Universidad Salesiana', href: 'https://unisal.edu.ar/' },
	{ src: '/logos_universidades/universidad_de_flores.webp', alt: 'Universidad de Flores', href: 'https://www.uflo.edu.ar/' },
	{ src: '/logos_universidades/universidad_catolica_de_santiago_del_estero.webp', alt: 'Universidad Católica de Santiago del Estero', href: 'https://www.ucse.edu.ar/' },
];

/** Medios "También los leíste en" (los mismos en todas las formaciones).
 *  CEC Times no tiene URL oficial confirmada → se muestra el logo sin enlace. */
export const MEDIOS_TAMBIEN: Logo[] = [
	{ src: '/logos_medios/news_mc.webp', alt: 'News.MC', href: 'https://news.mc/' },
	{ src: '/logos_medios/cec_times.webp', alt: 'CEC Times' },
	{ src: '/logos_medios/reuters.webp', alt: 'Reuters', href: 'https://www.reuters.com/' },
	{ src: '/logos_medios/la_nacion.webp', alt: 'La Nación', href: 'https://www.lanacion.com.ar/' },
	{ src: '/logos_medios/revista_praxis_filosofica.webp', alt: 'Revista Praxis Filosófica', href: 'https://praxisfilosofica.univalle.edu.co/' },
	{ src: '/logos_medios/sputnik.webp', alt: 'Sputnik', href: 'https://sputniknews.lat/' },
	{ src: '/logos_medios/universidad_del_valle_programa_editorial.webp', alt: 'Universidad del Valle — Programa Editorial', href: 'https://programaeditorial.univalle.edu.co/' },
	{ src: '/logos_medios/pagina_12.webp', alt: 'Página 12', href: 'https://www.pagina12.com.ar/' },
];

export const profesores = (titulo, lista) =>
	({
		tipo: 'profesores',
		titulo,
		intro: PROFESORES_INTRO,
		universidades: UNIVERSIDADES_PROFESORES,
		profesores: lista,
		medios: MEDIOS_TAMBIEN,
		masReferentesHref: '/plantel-academico/',
	}) as BloqueProfesores;

export const modulos = (titulo, lista, intro?, enlace?) =>
	({ tipo: 'modulos', titulo, modulos: lista, intro, enlace }) as BloqueModulos;

export const certificacion = (titulo, intro, puntos, foto, extras?) =>
	({ tipo: 'certificacion', titulo, intro, puntos, foto, ...extras }) as BloqueCertificacion;
/* ------------------------------------------------------------------ */
/* Los 32 componentes comunes                                          */
/* ------------------------------------------------------------------ */

/** Insignias institucionales de las formaciones (fuente única: se muestran en
 *  el hero de las formaciones con `intro`). Si cambia una insignia, cambia en
 *  todo el sitio. */
export const INSIGNIAS_INSTITUCIONALES = [
	'Institución Francesa',
	'Certificación Europea',
	'100% Online',
	'Salida Laboral Internacional',
] as const;

export const componentes: ComponenteComun[] = [
	{
		id: 'INTRO-MODULOS-CLASES',
		nota: 'Doc §2.',
		bloques: [
			texto(
				'Más de 100 clases, encuentros y grupos de estudio por distinguidos **profesores** de *Universidad de Buenos Aires, Universidad Católica Argentina, Universidad de Granada, Universidad de Aconcagua* y otras grandes instituciones.',
			),
		],
	},
	{
		id: 'METODOLOGIA-CABECERA',
		nota: 'Doc §3 — Sellos de metodología.',
		bloques: [
			chips([
				'Primera y única facultad con Supervisiones Gratuitas',
				'Primera Comunidad Internacional activa, + de 7000 miembros',
				'Modalidad 100% Online y Flexible',
			]),
		],
	},
	{
		id: 'METODOLOGIA-MODALIDAD-A',
		nota: 'Doc §4 — Máster, Psicoterapia, Subjetividad.',
		bloques: [
			lista([
				'Clases sincrónicas',
				'Clases grabadas',
				'Prácticas supervisadas',
				'Discusión de casos clínicos reales',
				'Salida Laboral Internacional',
				'Comunidad académica internacional activa',
			]),
		],
	},
	{
		id: 'METODOLOGIA-MODALIDAD-B',
		nota: 'Doc §5 — Clínica de Parejas, Infanto-Juvenil.',
		bloques: [
			lista([
				'Clases teóricas en vivo',
				'Clases grabadas',
				'Prácticas supervisadas',
				'Discusión de casos clínicos reales',
				'Salida Laboral Internacional',
				'Comunidad académica internacional activa',
				'Espacios de investigación y acompañamiento académico',
			]),
		],
	},
	{
		id: 'METODOLOGIA-CONTADORES',
		nota: 'Doc §6 — Valores del sitio original (+100/+400/+100); el render los anima desde 0 al visualizarse.',
		bloques: [
			contadores([
				{ valor: '+100', etiqueta: 'Clases grabadas' },
				{ valor: '+400', etiqueta: 'Materiales descargables' },
				{ valor: '+100', etiqueta: 'Clases optativas' },
			]),
		],
	},
	{
		id: 'FACULTAD-SUPERVISION-GRATUITA',
		nota: 'Doc §8 — Lema del bloque institucional.',
		bloques: [texto('Primera y única facultad con **Grupos de Supervisión y de Estudio Gratuitos**.')],
	},
	{
		id: 'FACULTAD-PILARES',
		nota: 'Doc §9 — Bullets de respaldo institucional.',
		bloques: [
			lista([
				'Institución con trayectoria internacional.',
				'Cuerpo docente con experiencia clínica y académica.',
				'Certificación internacional. (EFPP | APE | FEDE | DREETS)',
				'Comunidad activa de formación y supervisión.',
				'Acompañamiento para tu inserción laboral internacional.',
				'Prácticas clínicas supervisadas y rentadas.',
			]),
		],
	},
	{
		id: 'FACULTAD-LEMA',
		nota: 'Doc §10 — Eslogan de articulación.',
		bloques: [
			chips(['Abriendo grietas en lo Establecido', 'Rigurosos en los Fundamentos', 'Atentos al Porvenir'], 'lema'),
		],
	},
	{
		id: 'BENEFICIOS-INTRO',
		nota: 'Doc §11 — Título de la sección de beneficios.',
		bloques: [titulo('Beneficios exclusivos alumnos', 2, 'Incluido en tu formación')],
	},
	{
		id: 'BENEFICIO-INSCRIPCION-BONIFICADA',
		nota: 'Doc §12.',
		bloques: [
			beneficio({
				titulo: 'Inscripción Bonificada',
				subtitulo: 'Sin costo de entrada.',
				descripcion: 'El costo de inscripción queda completamente bonificado al ingresar.',
				precio: '€150',
			}),
		],
	},
	{
		id: 'BENEFICIO-PERFIL-TIMETOBETTER',
		nota: 'Doc §13.',
		bloques: [
			beneficio({
				titulo: 'Perfil en TimeToBetter',
				subtitulo: '6 meses gratuitos · Validación Lalangue.',
				descripcion:
					'Si no obtenés tu primer consultante en ese período, la bonificación se extiende hasta lograrlo.',
				precio: '€200',
			}),
		],
	},
	{
		id: 'BENEFICIO-GRUPOS-SUPERVISION',
		nota: 'Doc §14.',
		bloques: [
			beneficio({
				titulo: 'Grupos de Supervisión y Estudio',
				subtitulo: 'Exclusivos para alumnos.',
				descripcion:
					'Lecturas y referencias clínicas de formación psicoanalítica contemporánea.',
				precio: '€300',
			}),
		],
	},
	{
		id: 'BENEFICIOS-EXTRA-2-ANIOS',
		nota: 'Doc §15 — Beneficios adicionales solo en Máster y Psicoterapia.',
		bloques: [
			beneficio({
				titulo: 'Cinco módulos optativos',
				subtitulo: 'A elección de cualquier formación.',
				descripcion:
					'Módulos opcionales extras a elección de cualquier formación de la Facultad.',
				precio: '€495',
			}),
			beneficio({
				titulo: 'Taller «Interpretación de sueños»',
				subtitulo: 'Por Mariela Molina · 4 clases.',
				descripcion: 'Análisis de sueños: clínica, deseo e interpretación.',
				precio: '€47',
			}),
			beneficio({
				titulo: 'Videoteca Clínica Completa',
				subtitulo: 'Acceso ilimitado durante todo el programa.',
				descripcion: 'Clases, cursos y material exclusivo para alumnos, siempre disponible.',
				precio: '€171',
			}),
		],
	},
	{
		id: 'BENEFICIOS-GRID-BASE',
		nota: 'Grid de beneficios «exclusivos alumnos» — los 3 comunes a todas las formaciones (inscripción, perfil, grupos).',
		bloques: [
			beneficios([
				{
					titulo: 'Inscripción Bonificada',
					subtitulo: 'Sin costo de entrada.',
					descripcion: 'El costo de inscripción queda completamente bonificado al ingresar.',
					precio: '€150',
				},
				{
					titulo: 'Perfil en TimeToBetter',
					subtitulo: '6 meses gratuitos · Validación Lalangue.',
					descripcion:
						'Si no obtenés tu primer consultante en ese período, la bonificación se extiende hasta lograrlo.',
					precio: '€200',
				},
				{
					titulo: 'Grupos de Supervisión y Estudio',
					subtitulo: 'Exclusivos para alumnos.',
					descripcion:
						'Lecturas y referencias clínicas de formación psicoanalítica contemporánea.',
					precio: '€300',
				},
			], 3),
		],
	},
	{
		id: 'BENEFICIOS-GRID-COMPLETO',
		nota: 'Grid de beneficios «exclusivos alumnos» — los 6 del Máster/Psicoterapia (3 comunes + 3 de postgrado extendido).',
		bloques: [
			beneficios([
				{
					titulo: 'Cinco módulos optativos',
					subtitulo: 'A elección de cualquier formación.',
					descripcion:
						'Módulos opcionales extras a elección de cualquier formación de la Facultad.',
					precio: '€495',
				},
				{
					titulo: 'Taller «Interpretación de sueños»',
					subtitulo: 'Por Mariela Molina · 4 clases.',
					descripcion: 'Análisis de sueños: clínica, deseo e interpretación.',
					precio: '€47',
				},
				{
					titulo: 'Videoteca Clínica Completa',
					subtitulo: 'Acceso ilimitado durante todo el programa.',
					descripcion: 'Clases, cursos y material exclusivo para alumnos, siempre disponible.',
					precio: '€171',
				},
				{
					titulo: 'Inscripción Bonificada',
					subtitulo: 'Sin costo de entrada.',
					descripcion: 'El costo de inscripción queda completamente bonificado al ingresar.',
					precio: '€150',
				},
				{
					titulo: 'Perfil en TimeToBetter',
					subtitulo: '6 meses gratuitos · Validación Lalangue.',
					descripcion:
						'Si no obtenés tu primer consultante en ese período, la bonificación se extiende hasta lograrlo.',
					precio: '€200',
				},
				{
					titulo: 'Grupos de Supervisión y Estudio',
					subtitulo: 'Exclusivos para alumnos.',
					descripcion:
						'Lecturas y referencias clínicas de formación psicoanalítica contemporánea.',
					precio: '€300',
				},
			], 3),
		],
	},
	{
		id: 'BENEFICIOS-TOTAL-COMPLETO',
		nota: 'Total de beneficios Máster/Psicoterapia = 495+47+171+150+200+300 = 1363. Contador animado con miles en punto.',
		bloques: [
			totalBeneficios(
				'Valor total en beneficios',
				'€1363',
				'Todos estos beneficios forman parte de la formación.',
				{
					encabezado: 'Convierte tu deseo de saber en una práctica clínica ética y actual',
					texto: 'Agenda una entrevista gratuita y sin compromiso.',
					accion: { etiqueta: 'Agendar entrevista de admisión', href: 'https://go.facultadlalangue.com/entrevista-directa' },
				},
			),
		],
	},
	{
		id: 'BENEFICIOS-TOTAL-BASE',
		nota: 'Total de beneficios del resto de formaciones = 150+200+300 = 650. Contador animado con miles en punto.',
		bloques: [
			totalBeneficios(
				'Valor total en beneficios',
				'€650',
				'Todos estos beneficios forman parte de la formación.',
				{
					encabezado: 'Convierte tu deseo de saber en una práctica clínica ética y actual',
					texto: 'Agenda una entrevista gratuita y sin compromiso.',
					accion: { etiqueta: 'Agendar entrevista de admisión', href: 'https://go.facultadlalangue.com/entrevista-directa' },
				},
			),
		],
	},
	{
		id: 'DIRECTORIOS-INSERCION',
		nota: 'Doc §18 — página /facultad (se conserva acá porque la página Facultad la cita). Las formaciones usan SALIDA-LABORAL-INTERNACIONAL.',
		bloques: [
			texto([
				'Lalangue no solo favorece la transmisión del saber, sino también la inserción profesional en redes clínicas y espacios de trabajo a nivel internacional.',
				'Las prácticas en el **segundo año** de la Diplomatura en Psicoterapia con enfoque psicoanalítico y las del Máster en Psicoanálisis Aplicado pueden realizarse a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
				'Los psicoterapeutas de la **Comunidad Lalangue** pueden iniciar o ampliar su práctica clínica online a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
			]),
		],
	},
	{
		id: 'SALIDA-LABORAL-INTERNACIONAL',
		nota: 'Doc §17-19 — Máster y Psicoterapia. Réplica de la sección "Salida Laboral Internacional" de la landing del Máster SIN la cita de Freud + imagen: intro + bloque `columnas` 2/3-1/3 (las 2 tarjetas con fondo de contraste a la izquierda, el h3 "Un aprendizaje práctico y supervisado" + texto + lista con check a la derecha) + botón "Más información" centrado. Reemplaza el trío FREUD-CITA-TERAPIA-PUEBLO + DIRECTORIOS-INSERCION + APRENDIZAJE-PRACTICO-SUPERVISADO.',
		bloques: [
			texto('Lalangue no solo favorece la transmisión del saber, sino también la inserción profesional en redes clínicas y espacios de trabajo a nivel internacional.'),
			columnas(
				[
					tarjetas(
						[
							{
								descripcion: 'Las prácticas en el **segundo año** de la Diplomatura en Psicoterapia con enfoque psicoanalítico y las del Máster en Psicoanálisis Aplicado pueden realizarse a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
							},
							{
								descripcion: 'Los psicoterapeutas de la **Comunidad Lalangue** pueden iniciar o ampliar su práctica clínica online a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
							},
						],
						2,
					),
				],
				[
					titulo('Un aprendizaje práctico y supervisado', 3),
					texto(
						'Las prácticas se desarrollan bajo la **supervisión de profesores experimentados**, permitiendo que los alumnos:',
					),
					lista(
						[
							'Apliquen sus conocimientos en pacientes reales.',
							'Participen como oyentes en grupos de supervisión donde se discuten casos clínicos.',
							'Aprendan en un entorno de colaboración y análisis práctico.',
						],
						false,
						true,
					),
				],
				'2-1',
				'brand',
			),
			enlace('Más información', 'https://go.facultadlalangue.com/supervisiones', true),
		],
	},
	{
		id: 'INSERCION-ESTADISTICAS',
		nota: 'Doc §21 — Estadísticas de inserción (todas las formaciones). El `titulo` vive en el bloque para que el layout "secciones" lo renderice dentro de la banda oscura.',
		bloques: [
			stats({
				titulo: 'Inserción Laboral',
				filas: [
					{ region: 'América del sur', pct: '51%' },
					{ region: 'América del norte', pct: '35%' },
					{ region: 'Centroamérica', pct: '10%' },
					{ region: 'Europa', pct: '10%' },
					{ region: 'África y Asia', pct: '1%' },
				],
				frases: [
					'77 millones de personas de habla hispana en el mundo buscan activamente terapia o ayuda psicológica profesional.',
					'La mayoría de psicólogos recién recibidos no tienen pacientes durante los primeros dos años.',
					'Y más del 70% ejerce solo de manera local.',
				],
				referencia:
					'**Referencia:** Estudios de inserción laboral del *Colegio Oficial de Psicólogos de España (COP, 2021)* y el American Psychological Association Early Career Report (APA, 2022) muestran demoras de 1 a 3 años promedio en obtener estabilidad clínica. Global Therapy Market Report (Allied Market Research, 2023) señala que menos del 10% de los terapeutas latinoamericanos trabajan en formato online internacional.',
			}),
		],
	},
	{
		id: 'CERTIFICACION-INTRO',
		nota: 'Doc §22 — Intro de la certificación (todas).',
		bloques: [
			texto(
				'La **Facultad Internacional de Psicología y Psicoanálisis Lalangue** es una institución francesa reconocida como organismo de formación profesionalizante por la *DREETS (Gobierno Francés)*, avalada por la *Asociación de Psicoanalistas Europeos (APE)* y la *Federación Europea de Escuelas (FEDE)*, orientada a la práctica clínica real, al trabajo en comunidad y a la inserción en redes profesionales internacionales.',
			),
		],
	},
	{
		id: 'FAQ-LISTA-FORMACIONES',
		nota: 'Doc §23.',
		bloques: [
			faq(
				'¿Qué formaciones ofrece FIPP Lalangue?',
				[
					'**Lalangue** ha desarrollado programas de especialización en diferentes áreas del campo clínico, que abordan problemáticas contemporáneas desde diferentes perspectivas, entre ellos:',
				],
				[
					'Máster en Psicoanálisis Aplicado',
					'Diplomatura en Psicoterapia con enfoque psicoanalítico',
					'Diplomatura en Psicopatología Infanto-Juvenil',
					'Diplomatura en Subjetividad Digital, daño algorítmico y nuevas formas de sufrimiento',
					'Diplomatura en Clínica de Parejas y Erotismo Relacional',
					'Abordaje del Ataque de Pánico',
					'Terapias Breves',
				],
			),
		],
	},
	{
		id: 'FAQ-TITULO-OFICIAL',
		nota: 'Doc §24.',
		bloques: [
			faq('¿El título es oficial? ¿Tiene validez internacional?', [
				'Nuestros títulos son otorgados por la *Facultad Internacional de Psicología y Psicoanálisis Lalangue*, extensión hispanoparlante de la institución francesa **EFPP (E-Faculté de Psychologie et Psychanalyse)**, con más de 25 años de trayectoria y aval europeo.',
				'Facultad Lalangue es un organismo formador oficialmente reconocido en Francia, registrado ante la ***DREETS (Direction Régionale de l\u2019Économie, de l\u2019Emploi, du Travail et des Solidarités)*** — el organismo gubernamental que regula la formación profesional habilitante — bajo el régimen *Formaciones profesionalizantes*.',
				'Se trata de títulos privados propios altamente valorados en el campo psicoterapéutico y psicoanalítico académico internacional, que pueden presentarse ante asociaciones profesionales, directorios de psicoterapeutas, instituciones educativas o proyectos clínico-culturales en múltiples países.',
				'Nuestros títulos son propios, habilitantes en Francia y en varios otros países, donde permiten ejercer en el ámbito privado según las normativas locales. En algunos países, el acceso a sistemas públicos de salud puede requerir además un título universitario de estado en Psicología o Medicina. Por eso, recomendamos verificar la regulación vigente en tu lugar de residencia. En todos los casos, se trata de formaciones que aportan legitimidad académica, profundidad teórica y reconocimiento institucional, abriendo nuevas posibilidades de inserción profesional y articulación clínica a nivel internacional.',
			]),
		],
	},
	{
		id: 'FAQ-MEMBRESIA-GRATUITA',
		nota: 'Doc §25.',
		bloques: [
			faq(
				'¿Qué incluye la membresía profesional gratuita?',
				['Durante los primeros 3 meses recibirás, sin costo adicional:'],
				[
					'Acceso a 1 curso corto mensual.',
					'Revistas de psicoanálisis online.',
					'Grupos de supervisión clínica.',
					'Espacios de comunidad, biblioteca digital y encuentros académicos.',
					'60% de descuento en una segunda formación.',
				],
				['Luego de este período, puedes optar por continuar o no. **No es obligatorio ni afecta tu formación.**'],
			),
		],
	},
	{
		id: 'FAQ-ESTUDIANTE-PSICOLOGIA',
		nota: 'Doc §26.',
		bloques: [
			faq('¿Puedo inscribirme si soy estudiante de Psicología?', [
				'Sí, puedes inscribirte mientras estés cursando la carrera de Psicología. Hemos recibido a muchos estudiantes universitarios que deciden complementar su formación académica tradicional con una perspectiva psicoanalítica más profunda y contemporánea.',
				'📌 **Es importante que tengas en cuenta** que la cursada en Lalangue exige tiempo y compromiso: incluye clases semanales, evaluaciones continuas y un trabajo final integrador. Por eso, si estás dispuesto/a a asumir el desafío y organizar tu carga horaria, estaremos encantados de que formes parte de esta experiencia formativa.',
			]),
		],
	},
	{
		id: 'FAQ-ENTREVISTA-ADMISION',
		nota: 'Doc §27 — Preguntas de admisión/entrevista (todas las formaciones).',
		bloques: [
			faq('¿La entrevista de admisión tiene algún costo?', 'No, es completamente gratuita y sin compromiso.'),
			faq('¿Cuánto dura la entrevista?', 'Aproximadamente 30 minutos.'),
			faq(
				'¿Qué pasa después de la Entrevista?',
				'Te contactaremos luego para informarte si aplicas a una de las BECAS 60% y, si lo deseás, podrás avanzar con la inscripción.',
			),
			faq(
				'¿Necesito formación previa?',
				'No para acceder a alguna de nuestras Diplomaturas; para el Máster sí.',
			),
			faq('¿Cuáles son los cupos disponibles?', 'Este mes habilitamos 10 BECAS 60%.'),
		],
	},
	{
		id: 'OTRAS-FORMACIONES-LISTADO',
		nota: 'Sección "Nuestras formaciones" — réplica exacta del mismo bloque de la página Facultad: titulo + texto + tarjetas con nombres cortos y botón "Conocé más" (sin isologos).',
		bloques: [
			titulo('Nuestras formaciones'),
			texto([
				'La facultad ofrece **formaciones en psicología y psicoanálisis online** que integran teoría y clínica para profundizar en el estudio del inconsciente y la comprensión de la subjetividad contemporánea.',
			]),
			tarjetas([
				{ titulo: 'Máster en Psicoanálisis Aplicado', href: '/master-en-psicoanalisis/' },
				{ titulo: 'Diplomatura en Psicoterapia Psicoanalítica', href: '/psicoterapia-psicoanalitica/' },
				{ titulo: 'Diplomatura en Subjetividad Digital', href: '/subjetividad-digital/' },
				{ titulo: 'Diplomatura en Clínica de Parejas y Erotismo Relacional', href: '/clinica-de-parejas/' },
				{ titulo: 'Diplomatura en Psicopatología Infanto-Juvenil', href: '/psicopatologia-infanto-juvenil/' },
				{ titulo: 'Diplomatura en Metapsicología', href: '/metapsicologia/' },
			]),
		],
	},
	{
		id: 'INSTITUCIONES-ASOCIADAS',
		nota: 'Doc §29 — todas las formaciones. Logos en public/instituciones_asociadas/. Cada logo con href abre el sitio de la institución en pestaña nueva (target=_blank, sin hover).',
		bloques: [
			titulo('Instituciones asociadas', 4),
			carruselLogos([
				{
					src: '/instituciones_asociadas/time_to_better.webp',
					alt: 'Time to Better',
					href: 'https://timetobetter.com/',
				},
				{
					src: '/instituciones_asociadas/efpp.webp',
					alt: 'E-Faculté de Psychologie et Psychoanalyse',
					href: 'https://efpp.org/',
				},
				{
					src: '/instituciones_asociadas/association_psychanalystes_europeens.webp',
					alt: 'Association des Psychanalystes Européens',
					href: 'https://www.ape-psychanalyse.com/',
				},
				{
					src: '/instituciones_asociadas/discurso_freudiano.webp',
					alt: 'Discurso Freudiano',
					href: 'https://www.discursofreudiano.com/',
				},
				{
					src: '/instituciones_asociadas/federation_education_europe.webp',
					alt: 'Federation for Education in Europe — Fédération Européenne des Écoles',
					href: 'https://www.fede.education/ecoles/esage-paris/',
				},
				{
					src: '/instituciones_asociadas/raices_editorial.webp',
					alt: 'Raíces Editorial',
					href: 'https://raicesredasistencial.com/',
				},
				{
					src: '/instituciones_asociadas/psysos.webp',
					alt: 'PsySOS',
					href: 'https://psysos.org/',
				},
				{
					src: '/instituciones_asociadas/fede_internacional_psicologia_emergencia.webp',
					alt: 'Federación Internacional de Psicología de la Emergencia',
					href: 'https://fipe-ifep.org/',
				},
			]),
		],
	},
	{
		id: 'CTA-INSCRIBIRTE',
		nota: 'Doc §30 — CTA final.',
		bloques: [
			cta({
				titulo: '¿Listo para inscribirte?',
				subtitulo: '100% Online · Certificación Internacional',
				acciones: [{ etiqueta: 'Inscribirme ahora', href: '#precios' }],
			}),
		],
	},
	{
		id: 'FACULTAD-TEXTO-INSTITUCIONAL',
		nota: 'Doc §31 — Máster y Psicoterapia; Metapsicología con variante en la última frase.',
		bloques: [
			texto([
				'El psicoanálisis no se transmite como un conjunto de herramientas ni como un **saber estandarizado**.',
				'**Se construye en el tiempo**, en la lectura rigurosa, en la práctica clínica y en el trabajo con otros.',
				'**Facultad Lalangue** escucha los *murmullos de la época* y transmite el psicoanálisis como práctica viva y ética, trazando puentes desde los cuales emerge un nuevo modelo educativo sin fronteras.',
			]),
		],
	},
	{
		id: 'FAQ-DOCENTES',
		nota: 'Doc §32 — Pregunta y respuesta de "¿Quiénes son los docentes…?"',
		bloques: [
			faq('¿Quiénes son los docentes que forman parte de la Facultad Lalangue?', [
				'Nuestro equipo docente está conformado por psicólogos, psicoanalistas, médicos y especialistas internacionales, con años de experiencia clínica y formativa.',
				'Conócelos en este [Link](#profesores).',
			]),
		],
	},
	{
		id: 'FAQ-ENFOQUE-LACANIANO',
		nota: 'Doc §33 — Máster y Psicoterapia; las demás tienen respuesta propia.',
		bloques: [
			faq('¿El enfoque es exclusivamente lacaniano?', [
				'Nuestra formación es **psicoanalítica tanto freudiana como lacaniana**, pero articula con otros referentes imprescindibles para entender la subjetividad de la época y ampliar las herramientas prácticas.',
				'Nos proponemos una lectura ética, crítica y contemporánea del psicoanálisis, en diálogo con la clínica, las neurociencias, la cultura, la tecnología y los desafíos del presente.',
			]),
		],
	},
		{
			id: 'ADMISION',
			nota: 'Doc §34 — Sección de admisión y matrícula. Incluye título, bullets izquierda y cartel matrícula derecha.',
			bloques: [
				admision(
					'/admision_fondo.webp',
					'Admisión',
					[
						'Entrevista de admisión obligatoria.',
						'Entrevista gratuita.',
						'Orientación para regulaciones locales.',
						'Becas parciales para perfiles seleccionados.',
						'Se evalúa el recorrido, la disponibilidad y el deseo de formación.',
					],
					'Matrícula anual',
					[
						'€3990 → €1596 (-60%)',
						'25% adicional OFF en 1 pago',
						'€1197',
						'+ Planes de financiación',
					],
					'El ingreso al Máster se realiza mediante una Entrevista de Orientación y Admisión con la Dirección Académica. Esta instancia no es comercial: tiene como objetivo conocer el recorrido, la disponibilidad y tu deseo de formación, para evaluar juntos si este programa es adecuado para tu momento clínico y profesional.',
				),
			],
		},
] as const;

export type ComponenteId = (typeof componentes)[number]['id'];

/** Diccionario id → componente para el lookup en componentePorId. */
export const componentePorId: Record<ComponenteId, ComponenteComun> = Object.fromEntries(
	componentes.map((c) => [c.id, c]),
) as Record<ComponenteId, ComponenteComun>;

/** Cita el componente `nombre` dentro de las `secciones` de una formación. */
export const c = (nombre: ComponenteId): BloquePagina => ({ tipo: 'componente', nombre });

/** Agrupa bloques en una sección del layout 'secciones' (todas las formaciones). */
export const seccion = (...bloques: BloquePagina[]): SeccionPagina => ({ bloques });