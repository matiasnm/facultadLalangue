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
};
export type BloqueTexto = { tipo: 'texto'; parrafos: string[] };
export type BloqueLista = { tipo: 'lista'; items: string[]; ordenada?: boolean };
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
};
export type BloqueCita = { tipo: 'cita'; lineas: string[]; autor: string };
export type BloqueStats = {
	tipo: 'stats';
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
export type BloqueEnlace = { tipo: 'enlace'; etiqueta: string; href: string };
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
};
export type BloqueTarjetas = {
	tipo: 'tarjetas';
	items: { titulo: string; descripcion?: string; href?: string; imagen?: string }[];
};

export type Bloque =
	| BloqueTitulo
	| BloqueTexto
	| BloqueLista
	| BloqueChips
	| BloqueContadores
	| BloqueBeneficio
	| BloqueTotalBeneficios
	| BloqueCita
	| BloqueStats
	| BloqueFaq
	| BloqueCta
	| BloqueEnlace
	| BloquePersona
	| BloqueEquipo
	| BloqueTarjetas;

/** Un bloque de página: o cita un componente común o es un bloque directo. */
export type BloquePagina = { tipo: 'componente'; nombre: ComponenteId } | Bloque;

export interface ComponenteComun {
	id: ComponenteId;
	/** Referencia al doc (solo para auditoría, no se renderiza). */
	nota?: string;
	bloques: Bloque[];
}

/* ------------------------------------------------------------------ */
/* Helpers de construcción (evitan ruido entre los datos)              */
/* ------------------------------------------------------------------ */
export const titulo = (texto, nivel = 2, kicker?) => ({ tipo: 'titulo', texto, nivel, kicker });
export const texto = (parrafos) =>
	({ tipo: 'texto', parrafos: Array.isArray(parrafos) ? parrafos : [parrafos] }) as BloqueTexto;
export const lista = (items, ordenada = false) => ({ tipo: 'lista', items, ordenada }) as BloqueLista;
export const chips = (items, variante = 'sello') => ({ tipo: 'chips', items, variante }) as BloqueChips;
export const contadores = (items) => ({ tipo: 'contadores', items }) as BloqueContadores;
export const beneficio = ({ titulo, subtitulo, descripcion, precio }) =>
	({ tipo: 'beneficio', titulo, subtitulo, descripcion, precio }) as BloqueBeneficio;
export const totalBeneficios = (titulo, valor, nota) =>
	({ tipo: 'total-beneficios', titulo, valor, nota }) as BloqueTotalBeneficios;
export const cita = (lineas, autor) => ({ tipo: 'cita', lineas, autor }) as BloqueCita;
export const stats = ({ filas, frases, referencia }) =>
	({ tipo: 'stats', filas, frases, referencia }) as BloqueStats;
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
export const enlace = (etiqueta, href) => ({ tipo: 'enlace', etiqueta, href }) as BloqueEnlace;
export const persona = (nombre, titulo, bio, foto?, boton?) =>
	({
		tipo: 'persona',
		nombre,
		titulo,
		bio: Array.isArray(bio) ? bio : [bio],
		foto,
		boton,
	}) as BloquePersona;
export const equipo = (personas, columnas = 3, modal = false) =>
	({ tipo: 'equipo', personas, columnas, modal: modal || undefined }) as BloqueEquipo;
export const tarjetas = (items) => ({ tipo: 'tarjetas', items }) as BloqueTarjetas;

/* ------------------------------------------------------------------ */
/* Los 33 componentes comunes                                          */
/* ------------------------------------------------------------------ */
export const componentes: ComponenteComun[] = [
	{
		id: 'INSIGNIAS-INSTITUCIONALES',
		nota: 'Doc §1 — Encabezado de cada formación.',
		bloques: [
			chips(
				['Institución Francesa', 'Certificación Europea', '100% Online', 'Salida Laboral Internacional'],
				'insignia',
			),
		],
	},
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
		nota: 'Doc §6 — Valores animados por JS en el sitio; por ahora figuran en 0.',
		bloques: [
			contadores([
				{ valor: '+ 0', etiqueta: 'Clases grabadas' },
				{ valor: '+ 0', etiqueta: 'Materiales descargables' },
				{ valor: '+ 0', etiqueta: 'Clases optativas' },
			]),
		],
	},
	{
		id: 'PROFESORES-INTRO',
		nota: 'Doc §7 — Intro de la sección de profesores (idéntica en todas).',
		bloques: [
			texto(
				'Nuestros docentes cuentan con trayectoria en universidades y espacios de formación de Europa y América Latina, así como en instituciones clínicas y asociaciones profesionales internacionales.',
			),
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
		id: 'BENEFICIOS-TOTAL',
		nota: 'Doc §16.',
		bloques: [
			totalBeneficios(
				'Valor total en beneficios',
				'€0',
				'Todos estos beneficios forman parte de la formación.',
			),
		],
	},
	{
		id: 'FREUD-CITA-TERAPIA-PUEBLO',
		nota: 'Doc §17 — Máster y Psicoterapia.',
		bloques: [
			cita(
				[
					'«La conciencia moral de la sociedad reconocerá que todos, sin distinción, tienen derecho a la terapia, al igual que a la cirugía básica…',
					'Pero cualquiera que sea la forma futura de esta psicoterapia para el pueblo, y no importa qué elementos la constituyan finalmente, no cabe ninguna duda de que sus ingredientes más eficaces e importantes seguirán siendo los que ella tome del psicoanálisis riguroso, ajeno a todo partidismo.»',
				],
				'Sigmund Freud, «Los caminos de la terapia psicoanalítica» · 1918',
			),
		],
	},
	{
		id: 'DIRECTORIOS-INSERCION',
		nota: 'Doc §18 — Máster y Psicoterapia.',
		bloques: [
			texto([
				'Lalangue no solo favorece la transmisión del saber, sino también la inserción profesional en redes clínicas y espacios de trabajo a nivel internacional.',
				'Las prácticas en el **segundo año** de la Diplomatura en Psicoterapia con enfoque psicoanalítico y las del Máster en Psicoanálisis Aplicado pueden realizarse a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
				'Los psicoterapeutas de la **Comunidad Lalangue** pueden iniciar o ampliar su práctica clínica online a través de los Directorios con los que Lalangue tiene acuerdos, como TimeToBetter, PsySOS y otros.',
			]),
		],
	},
	{
		id: 'APRENDIZAJE-PRACTICO-SUPERVISADO',
		nota: 'Doc §19 — Máster y Psicoterapia.',
		bloques: [
			titulo('Un aprendizaje práctico y supervisado', 3),
			texto(
				'Las prácticas se desarrollan bajo la **supervisión de profesores experimentados**, permitiendo que los alumnos:',
			),
			lista([
				'Apliquen sus conocimientos en pacientes reales.',
				'Participen como oyentes en grupos de supervisión donde se discuten casos clínicos.',
				'Aprendan en un entorno de colaboración y análisis práctico.',
			]),
		],
	},
	{
		id: 'SUPERVISION-CLINICA-COMPLETA',
		nota: 'Doc §20 — Máster y Psicoterapia (texto casi idéntico).',
		bloques: [
			titulo('Supervisión Clínica para Psicoterapeutas y Psicoanalistas'),
			texto('El lugar fundamental de la supervisión en la formación del analista.'),
			cita(
				[
					'«No basta que el analista haya sido educado como médico y psicólogo, o que conozca las teorías del psicoanálisis; tiene que haber sido él mismo analizado.»',
				],
				'Sigmund Freud; Análisis terminable e interminable (1937)',
			),
			titulo('¿Cómo son las supervisiones clínicas?', 3),
			texto(
				'Las supervisiones consisten en encuentros grupales con un profesional experimentado, donde el terapeuta puede presentar un caso clínico para:',
			),
			lista([
				'Revisar y esclarecer situaciones transferenciales.',
				'Abordar los momentos de impasse o desconcierto en el tratamiento.',
				'Sostener su lugar de analista frente a las dificultades propias de la práctica.',
				'Recibir orientación técnica y ética, respetando la singularidad de cada caso y de cada psicoterapeuta.',
			]),
			texto(
				'Supervisar no es signo de debilidad ni de inexperiencia: es un acto de responsabilidad clínica y de cuidado hacia los pacientes y hacia uno mismo.',
			),
			texto(
				'Los espacios de supervisión son lugares privilegiados de aprendizaje donde la teoría psicoanalítica se implementa y se interroga en la práctica real.',
			),
			texto(
				'Supervisar permite abrir preguntas, revisar maniobras clínicas, y enriquecer la escucha a través del intercambio con colegas y con un supervisor de mayor experiencia.',
			),
			cita(
				[
					'«Un analista jamás debe considerarse terminado en su formación. El psicoanálisis es un trabajo interminable.»',
				],
				'Sigmund Freud; Análisis terminable e interminable (1937)',
			),
			titulo('Modalidades de Supervisión', 3),
			titulo('Supervisiones Grupales', 4),
			texto('Espacios con diferentes profesionales y enfoques.'),
			titulo('Supervisiones para alumnos', 4),
			texto('Espacios exclusivos para los alumnos de Lalangue.'),
			texto(
				'En Facultad Internacional de Psicología y Psicoanálisis Lalangue, ofrecemos supervisiones a psicoterapeutas y psicoanalistas formados o en ejercicio, con el objetivo de:',
			),
			lista(['Acompañar su práctica clínica.', 'Sostener su deseo de analista.', 'Promover la formación permanente y el crecimiento ético-profesional.']),
			texto(
				'Contamos con supervisores de amplia experiencia clínica y académica, formados en la tradición freudiana y lacaniana, disponibles para acompañarlo en su recorrido.',
			),
			cita(
				[
					'«La formación de un analista consiste en tres elementos: la formación teórica, el análisis personal y el control de su práctica.»',
				],
				'Sigmund Freud; La cuestión de un análisis leal (1926)',
			),
			titulo('¿Te gustaría fortalecer tu práctica clínica?', 3),
			texto('**Contáctanos** para conocer las condiciones, modalidades y supervisores disponibles.'),
			texto('**Grupos de Supervisión Gratuitos — Cupos Limitados**'),
			texto(
				'**¡Importante!** Actualmente disponemos de **cupos limitados** para supervisiones **gratuitas.**',
			),
			texto(
				'No dejes pasar esta oportunidad única de seguir construyendo tu práctica de la mano de colegas y supervisores experimentados.',
			),
		],
	},
	{
		id: 'INSERCION-ESTADISTICAS',
		nota: 'Doc §21 — Estadísticas de inserción (todas las formaciones).',
		bloques: [
			stats({
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
		nota: 'Doc §28 — Sección "Nuestras formaciones" (enlaces internos).',
		bloques: [
			titulo('Nuestras formaciones'),
			texto(
				'La facultad ofrece **formaciones en psicología y psicoanálisis online** que integran teoría y clínica para profundizar en el estudio del inconsciente y la comprensión de la subjetividad contemporánea.',
			),
			lista([
				'[Máster en Psicoanálisis Aplicado](/master-en-psicoanalisis/)',
				'[Diplomatura en Psicoterapia Psicoanalítica](/psicoterapia-psicoanalitica/)',
				'[Diplomatura en Subjetividad Digital, Daño Algorítmico y Nuevas Formas de Sufrimiento Online](/subjetividad-digital/)',
				'[Diplomatura en Clínica de Parejas y Erotismo Relacional](/clinica-de-parejas/)',
				'[Diplomatura en Psicopatología Infanto-Juvenil](/psicopatologia-infanto-juvenil/)',
				'[Diplomatura en Metapsicología: Introducción a la lógica psicoanalítica](/metapsicologia/)',
			]),
		],
	},
	{
		id: 'INSTITUCIONES-ASOCIADAS',
		nota: 'Doc §29 — Máster, Psicoterapia y Metapsicología.',
		bloques: [
			titulo('Instituciones asociadas', 4),
			texto(
				'Time to Better · E-Faculté de Psychologie et Psychanalyse · Association des Psychanalystes Européens · Discurso Freudiano · Federation for Education in Europe — Fédération Européenne des Écoles · Raíces Editorial · PsySOS · Federación Internacional de Psicología de la Emergencia',
			),
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
] as const;

export type ComponenteId = (typeof componentes)[number]['id'];

/** Diccionario id → componente para el lookup en componentePorId. */
export const componentePorId: Record<ComponenteId, ComponenteComun> = Object.fromEntries(
	componentes.map((c) => [c.id, c]),
) as Record<ComponenteId, ComponenteComun>;

/** Cita el componente `nombre` dentro de las `secciones` de una formación. */
export const c = (nombre: ComponenteId): BloquePagina => ({ tipo: 'componente', nombre });