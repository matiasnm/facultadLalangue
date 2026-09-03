/**
 * Datos de la página /facultad.
 *
 * Secciones extraídas de docs/facultad-contenido.md + sección "origen" de
 * docs/home-content.md (no usada en home). Bloques directos + componentes
 * comunes de componentes.ts — el render se define UNA VEZ en BloqueRender.
 */
import { c, titulo, texto, lista, chips, contadores, stats, faq, cita, enlace, tarjetas } from './componentes';
import type { BloquePagina } from './componentes';

export const facultadSecciones: BloquePagina[] = [
	/* ── Identidad ─────────────────────────────────────────────────────── */
	titulo('Una formación clínica francesa, con alcance global'),
	texto([
		'Lalangue es una institución académica francesa dedicada a la formación clínica y al desarrollo del pensamiento contemporáneo en psicología y psicoanálisis.',
		'Constituye la extensión hispanohablante de la **E-Faculté de Psychologie et Psychanalyse (EFPP – Francia)**, con más de 25 años de trayectoria en formación clínica y transmisión del psicoanálisis en Europa. Está reconocida como **organismo de formación profesionalizante** por la *DREETS (Dirección regional de economía, empleo, trabajo y solidaridades — Gobierno Francés)*, dentro del régimen francés de formación profesional continua.',
		'Nuestra actividad académica cuenta con el aval de instituciones europeas del campo clínico y educativo.',
	]),
	lista([
		'**APE** — Asociación de Psicoanalistas Europeos',
		'**FEDE** — Federación Europea de Escuelas',
	]),
	texto('Desarrollamos programas formativos dirigidos principalmente a la comunidad hispanohablante global, promoviendo una **clínica rigurosa, ética, internacional y plural.**'),

	/* ── Origen (de home-content.md, no usado en home) ──────────────────── */
	titulo('Origen'),
	texto([
		'Lalangue emerge de la sinergia de dos profesionales de trayectoria internacional, con experiencia en el campo clínico y académico:',
	]),
	lista([
		'**Hervé Madet** — Director y Fundador de la E-Faculté de Psychologie et Psychanalyse (EFPP – Francia) y profesor de Metapsicología en diversas instituciones universitarias francesas.',
		'**Lorena Salthu** — Psicoanalista internacional, Decana de Lalangue y fundadora de PSYSOS, plataforma clínica internacional de atención gratuita de emergencias psicológicas.',
	]),
	texto('Abriendo grietas en lo establecido, sosteniendo el rigor de los fundamentos y permaneciendo atentos a las preguntas del porvenir.'),

	/* ── Visión ────────────────────────────────────────────────────────── */
	titulo('El modelo educativo francés, en diálogo con la clínica contemporánea'),
	texto([
		'Desde su origen, el proyecto académico se ha orientado a construir un espacio de formación global que permita articular el modelo educativo francés con las realidades clínicas contemporáneas del mundo hispanohablante, impulsando nuevos formatos que prioricen el acceso del deseo vocacional a la calidad educativa.',
		'Bajo esta inspiración, Lalangue propone el estudio riguroso de diversos modelos teóricos de la psicología moderna, integrando aportes provenientes de las ciencias y favoreciendo el diálogo entre las diversas corrientes de la psicoterapia.',
	]),
	texto('Este enfoque permite abordar problemáticas actuales vinculadas a la subjetividad contemporánea, entre ellas:'),
	chips([
		'Transformaciones en los vínculos sociales',
		'Impacto de los entornos digitales en la subjetividad',
		'Nuevas configuraciones del deseo y del goce',
		'Dinámicas familiares contemporáneas',
		'Procesos psicopatológicos emergentes',
	]),

	/* ── Modelo ────────────────────────────────────────────────────────── */
	titulo('Formaciones profesionalizantes bajo el régimen francés'),
	texto([
		'La propuesta formativa de Lalangue se estructura bajo el régimen francés de formaciones profesionalizantes (*formations professionnalisantes*). El modelo pedagógico articula tres pilares:',
	]),
	lista([
		'**Formación teórica sistemática** — Estudio riguroso de diversos modelos teóricos de la psicología moderna, integrando aportes de las ciencias.',
		'**Práctica clínica supervisada** — Acompañamiento de casos clínicos bajo la orientación de docentes con experiencia.',
		'**Salida laboral internacional** — Inserción profesional mediante redes clínicas internacionales y plataformas de consulta online.',
	]),
	texto('Sostener el desarrollo de profesionales capaces de osar una práctica clínica ética y rigurosa, en diálogo con los desafíos contemporáneos y en comunidad.'),

	/* ── Comunidad ─────────────────────────────────────────────────────── */
	titulo('Una comunidad internacional de más de 15 países'),
	texto([
		'Lalangue reúne a docentes, estudiantes y profesionales de Europa y América Latina, promoviendo el intercambio plural como fuente de nuevos espacios académicos.',
	]),
	lista([
		'**Supervisiones clínicas grupales** — Acompañamiento de casos clínicos para profesionales y estudiantes bajo la orientación de docentes con experiencia.',
		'**Aulas Libres** — Talleres abiertos a la comunidad sobre contenidos de interés general desde la perspectiva de nuestros docentes.',
		'**Jornadas Internacionales** — Congresos académicos especializados vinculados a la psicología, el psicoanálisis y las ciencias humanas.',
		'**Grupos de Estudio** — Seminarios de trabajo teórico coordinados por docentes para profundizar la lectura de textos fundamentales.',
	]),
	texto('En los últimos meses, estas actividades han convocado a más de **30.000 participantes** en nuestros eventos online.'),

	/* ── Clínica ───────────────────────────────────────────────────────── */
	titulo('Inserción profesional y redes clínicas internacionales'),
	texto([
		'Lalangue promueve la inserción profesional de sus estudiantes mediante la participación en redes clínicas internacionales y plataformas de consulta online.',
	]),
	lista([
		'Colaboración con plataformas internacionales de psicoterapia',
		'Participación en directorios profesionales',
		'Desarrollo de redes clínicas supervisadas',
	]),
	titulo('Supervisiones Clínicas Lalangue', 4),

	/* ── Formaciones destacadas ────────────────────────────────────────── */
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
	enlace('Postulate para una beca', 'https://go.facultadlalangue.com/entrevista-directa'),

	/* ── Metodología ───────────────────────────────────────────────────── */
	titulo('Metodología'),
	texto('Primera y única facultad con Supervisiones Gratuitas'),
	chips([
		'Primera Comunidad Internacional activa, + de 7000 miembros',
		'Modalidad 100% Online y Flexible',
	]),
	lista([
		'Clases sincrónicas',
		'Clases grabadas',
		'Prácticas supervisadas',
		'Discusión de casos clínicos reales',
		'Salida Laboral Internacional',
		'Comunidad académica internacional activa',
	]),
	contadores([
		{ valor: '+ 0', etiqueta: 'Materiales descargables' },
		{ valor: '+ 0', etiqueta: 'Clases optativas' },
	]),
	enlace('Solicitar entrevista de admisión', 'https://go.facultadlalangue.com/entrevista-directa'),

	/* ── Modelo académico (5 pilares) ──────────────────────────────────── */
	titulo('El modelo académico articula'),
	chips(['Abriendo grietas en lo Establecido', 'Rigurosos en los Fundamentos', 'Atentos al Porvenir'], 'lema'),
	lista([
		'**FORMACIÓN TEÓRICA RIGUROSA** — Un recorrido sistemático por el psicoanálisis y más de diez marcos teóricos fundamentales del campo clínico, abordados con profundidad conceptual y precisión.',
		'**PRÁCTICA CLÍNICA SUPERVISADA** — Espacios de supervisión incluidos en la formación que permiten trabajar casos reales, desarrollar criterio clínico y sostener una práctica orientada éticamente.',
		'**GRUPOS DE ESTUDIO** — Instancias de trabajo colectivo donde profundizar textos y conceptos clave, en intercambio con docentes y estudiantes de distintos países.',
		'**COMUNIDAD ACADÉMICA INTERNACIONAL** — Una red activa de profesionales y estudiantes que favorece el intercambio, el aprendizaje continuo y la construcción colectiva del saber.',
		'**INSERCIÓN PROFESIONAL INTERNACIONAL** — Acceso a redes clínicas, directorios profesionales y oportunidades que permiten proyectar tu práctica más allá de tu país.',
	]),
	lista([
		'Institución con trayectoria internacional.',
		'Cuerpo docente con experiencia clínica y académica.',
		'Certificación internacional. (EFPP | APE | FEDE | DREETS)',
		'Comunidad activa de formación y supervisión.',
		'Acompañamiento para tu inserción laboral internacional.',
		'Prácticas clínicas supervisadas y rentadas.',
	]),

	/* ── Estadísticas de inserción ─────────────────────────────────────── */
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

	/* ── Certificación ─────────────────────────────────────────────────── */
	titulo('Certificación'),
	texto([
		'La **Facultad Internacional de Psicología y Psicoanálisis Lalangue** es una institución francesa reconocida como organismo de formación profesionalizante por la *DREETS (Gobierno Francés)*, avalada por la *Asociación de Psicoanalistas Europeos (APE)* y la *Federación Europea de Escuelas (FEDE)*, orientada a la práctica clínica real, al trabajo en comunidad y a la inserción en redes profesionales internacionales.',
	]),
	lista([
		'Certificación internacional con reconocimiento académico y clínico.',
		'El ejercicio profesional depende de la normativa vigente en cada país.',
	]),
	texto('*Diploma de muestra*'),

	/* ── Esta institución es para ti si ────────────────────────────────── */
	titulo('Esta institución es para ti si'),
	lista([
		'Eres psicólogo, terapeuta o profesional del campo de la salud mental, o te interesa formarte en este ámbito.',
		'Buscas una formación rigurosa que combine teoría, práctica clínica y acompañamiento profesional.',
		'Te interesa comprender la subjetividad contemporánea más allá de un único enfoque teórico.',
		'Quieres incorporar herramientas clínicas para abordar problemáticas actuales en consulta.',
		'Valoras una formación internacional que te permita ampliar tus oportunidades profesionales.',
		'Deseas formar parte de una comunidad académica activa, con intercambio y supervisión clínica.',
	]),

	/* ── Admisión ──────────────────────────────────────────────────────── */
	titulo('Admisión'),
	texto([
		'El ingreso a Lalangue se realiza mediante una **Entrevista de Orientación y Admisión** con el equipo académica. Esta instancia **no es comercial**: tiene como objetivo conocer tu recorrido, tu disponibilidad y tu deseo de formación, para evaluar juntos si el programa es adecuado para tu momento profesional y formativo.',
		'Desde su origen, el proyecto académico se ha orientado a construir un espacio de formación global que permita articular el modelo educativo francés con las **realidades clínicas contemporáneas del mundo hispanohablante**, impulsando nuevos formatos que prioricen el acceso del deseo vocacional a la calidad educativa.',
		'Bajo esta mirada, entendemos que la formación no debe quedar limitada por factores económicos. Por eso, brindamos **becas y planes de financiación** adaptados a cada perfil, que se definen de manera personalizada durante el proceso de admisión. De este modo, la dimensión económica no será un obstáculo, sino una variable que puede trabajarse junto a la institución.',
	]),
	lista([
		'Entrevista de admisión obligatoria',
		'Evaluación personalizada de tu perfil y recorrido',
		'Orientación según regulaciones locales',
		'Becas y financiación adaptadas a cada perfil',
	]),

	/* ── Salida Laboral Internacional ──────────────────────────────────── */
	titulo('Salida Laboral Internacional'),
	cita(
		[
			'«La conciencia moral de la sociedad reconocerá que todos, sin distinción, tienen derecho a la terapia, al igual que a la cirugía básica…',
			'Pero cualquiera que sea la forma futura de esta psicoterapia para el pueblo, y no importa qué elementos la constituyan finalmente, no cabe ninguna duda de que sus ingredientes más eficaces e importantes seguirán siendo los que ella tome del psicoanálisis riguroso, ajeno a todo partidismo.»',
		],
		'Sigmund Freud, «Los caminos de la terapia psicoanalítica» · 1918',
	),
	c('DIRECTORIOS-INSERCION'),

	/* ── Prácticas supervisadas ────────────────────────────────────────── */
	titulo('Un aprendizaje práctico y supervisado'),
	texto([
		'Las prácticas se desarrollan bajo la **supervisión de profesores experimentados**, permitiendo que los alumnos:',
	]),
	lista([
		'Apliquen sus conocimientos en pacientes reales.',
		'Participen como oyentes en grupos de supervisión donde se discuten casos clínicos.',
		'Aprendan en un entorno de colaboración y análisis práctico.',
	]),
	enlace('Más información', 'https://go.facultadlalangue.com/supervisiones'),

	/* ── Supervisión Clínica ───────────────────────────────────────────── */
	titulo('Supervisión Clínica para Psicoterapeutas y Psicoanalistas'),
	texto('El lugar fundamental de la supervisión en la formación del analista.'),
	cita(
		['«No basta que el analista haya sido educado como médico y psicólogo, o que conozca las teorías del psicoanálisis; tiene que haber sido él mismo analizado.»'],
		'Sigmund Freud; Análisis terminable e interminable (1937)',
	),
	titulo('¿Cómo son las supervisiones clínicas?', 3),
	texto([
		'Las supervisiones consisten en encuentros grupales con un profesional experimentado, donde el terapeuta puede presentar un caso clínico para:',
	]),
	lista([
		'Revisar y esclarecer situaciones transferenciales.',
		'Abordar los momentos de impasse o desconcierto en el tratamiento.',
		'Sostener su lugar de analista frente a las dificultades propias de la práctica.',
		'Recibir orientación técnica y ética, respetando la singularidad de cada caso y de cada psicoterapeuta.',
	]),
	texto('Supervisar no es signo de debilidad ni de inexperiencia: es un acto de responsabilidad clínica y de cuidado hacia los pacientes y hacia uno mismo.'),
	texto('Los espacios de supervisión son lugares privilegiados de aprendizaje donde la teoría psicoanalítica se implementa y se interroga en la práctica real.'),
	texto('Supervisar permite abrir preguntas, revisar maniobras clínicas, y enriquecer la escucha a través del intercambio con colegas y con un supervisor de mayor experiencia.'),
	cita(
		['«Un analista jamás debe considerarse terminado en su formación. El psicoanálisis es un trabajo interminable.»'],
		'Sigmund Freud; Análisis terminable e interminable (1937)',
	),
	titulo('Modalidades de Supervisión', 3),
	tarjetas([
		{ titulo: 'Supervisiones Grupales', descripcion: 'Espacios con diferentes profesionales y enfoques.' },
		{ titulo: 'Supervisiones para alumnos', descripcion: 'Espacios exclusivos para los alumnos de Lalangue.' },
	]),
	texto([
		'En Facultad Internacional de Psicología y Psicoanálisis Lalangue, ofrecemos supervisiones a psicoterapeutas y psicoanalistas formados o en ejercicio, con el objetivo de:',
	]),
	lista(['Acompañar su práctica clínica.', 'Sostener su deseo de analista.', 'Promover la formación permanente y el crecimiento ético-profesional.']),
	texto('Contamos con supervisores de amplia experiencia clínica y académica, formados en la tradición freudiana y lacaniana, disponibles para acompañarlo en su recorrido.'),
	cita(
		['«La formación de un analista consiste en tres elementos: la formación teórica, el análisis personal y el control de su práctica.»'],
		'Sigmund Freud; La cuestión de un análisis leal (1926)',
	),
	titulo('¿Te gustaría fortalecer tu práctica clínica?', 3),
	texto('**Contáctanos** para conocer las condiciones, modalidades y supervisores disponibles.'),
	texto('**Grupos de Supervisión Gratuitos — Cupos Limitados**'),
	texto('**¡Importante!** Actualmente disponemos de **cupos limitados** para supervisiones **gratuitas.**'),
	texto('No dejes pasar esta oportunidad única de seguir construyendo tu práctica de la mano de colegas y supervisores experimentados.'),
	enlace('Quiero inscribirme', 'https://go.facultadlalangue.com/supervisiones'),

	/* ── CTA ───────────────────────────────────────────────────────────── */
	{
		tipo: 'cta',
		titulo: 'Convierte tu deseo de saber en una práctica clínica ética y actual',
		acciones: [{ etiqueta: 'Solicitar entrevista de admisión', href: 'https://go.facultadlalangue.com/entrevista-directa' }],
	},

	/* ── FAQs ──────────────────────────────────────────────────────────── */
	titulo('Preguntas Frecuentes', 2, 'sobre Lalangue | sobre la entrevista'),
	c('FAQ-LISTA-FORMACIONES'),
	faq(
		'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
		[
			'No necesariamente.',
		],
		[
			'La Formación en Psicoterapia Psicoanalítica/Diplomado Internacional (2 años) está abierta a profesionales y personas con interés en la práctica vocacional del acompañamiento, inclusive sin estudios previos.',
			'La Formación en Psicoanálisis Aplicado/Master Internacional Propio (2 años) funciona como un posgrado y requiere formación previa en psicología, psicoterapia u otras disciplinas afines.',
		],
		[
			'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
		],
	),
	c('FAQ-TITULO-OFICIAL'),
	faq(
		'¿Cuál es la duración de las formaciones y cuál es la modalidad?',
		[
			'Ambas formaciones (Master en Psicoanálisis y Diplomado en Psicoterapia Psicoanalítica) tienen una duración de **2 años (72 semanas)** y se cursan en modalidad **100% online**.',
			'La propuesta combina clases grabadas semanales, encuentros en vivo (también disponibles en diferido), lecturas y materiales complementarios, lo que permite una cursada flexible y accesible desde cualquier país.',
			'El sistema de evaluación incluye cuestionarios tipo multiple choice al finalizar cada clase grabada, evaluaciones parciales y un trabajo final integrador de un mínimo de 50 páginas, que debe ser defendido ante la Dirección Académica.',
			'Además, la Facultad prevé dos reagrupamientos presenciales anuales en distintos países, abiertos a toda la comunidad estudiantil.',
		],
	),
	c('FAQ-MEMBRESIA-GRATUITA'),
	faq(
		'¿Cómo me inscribo y cuándo comienza la formación?',
		[
			'Puedes inscribirte completando el [**Formulario de Inscripción.**](https://campus.facultadlalangue.com/becas-60/)',
			'El inicio oficial de clases es el **13 de octubre de 2025**, pero quienes se inscriban ahora tendrán acceso inmediato a cursos de preparación, entrevistas y espacios exclusivos de bienvenida.',
		],
	),
	c('FAQ-DOCENTES'),
	c('FAQ-ENFOQUE-LACANIANO'),
	c('FAQ-ESTUDIANTE-PSICOLOGIA'),
	c('FAQ-ENTREVISTA-ADMISION'),
];
