/**
 * Catálogo de formaciones de Lalangue.
 * Fuente única de datos para las páginas de formación (una página por cada
 * formación). Cada `slug` equivale a la URL de la página y coincide con las
 * rutas citadas en el menú del header.
 *
 * Contenidos reales transcritos de docs/formaciones-contenido.md (Parte II).
 * El contenido de cada página está declarado como una secuencia de bloques
 * (`secciones`): o citas un componente común (`c('NOMBRE')`, definido en
 * src/data/componentes.ts) o define un bloque propio. Ninguna página lleva
 * text-bruto de diseño: todo pasa por los render de src/components/formacion/.
 */
import {
	c,
	titulo,
	texto,
	lista,
	enlace,
	faq,
	type BloquePagina,
} from './componentes';

export interface Formacion {
	slug: string;
	titulo: string;
	categoria: string;
	/** Tagline de presentación (bajo el h1). */
	descripcion: string;
	/** Badge opcional del encabezado (p. ej. "Nuevas Cohortes…"). */
	kicker?: string;
	duracion: string;
	modalidad: string;
	dirigidoA: string;
	secciones: BloquePagina[];
}

const ENTREVISTA = 'https://go.facultadlalangue.com/entrevista-directa';

/** Grupo "Plan de financiación": título + línea de precio + notas + botón checkout. */
const plan = (paso: string, precioLinea: string, notas: string[], cart: number): BloquePagina[] => [
	titulo(paso, 3),
	texto(precioLinea),
	lista(notas),
	enlace('Inscribirme', `https://campus.facultadlalangue.com/checkout/?add-to-cart=${cart}`),
];

export const formaciones: Formacion[] = [
	/* ------------------------------------------------------------------ */
	/* Máster en Psicoanálisis Aplicado                                    */
	/* ------------------------------------------------------------------ */
	{
		slug: 'master-en-psicoanalisis',
		titulo: 'Máster en Psicoanálisis Aplicado',
		categoria: 'Máster',
		kicker: 'Nuevas Cohortes 09/2026 | Becas del 60%',
		descripcion: 'Para quienes comparten la pasión por un psicoanálisis actual.',
		duracion: '2 años (72 semanas)',
		modalidad: '100% online',
		dirigidoA: 'Profesionales con formación previa en psicología, psicoterapia u otras disciplinas afines',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto(
				'Este Máster propone un recorrido formativo de 2 años para quienes desean profundizar su práctica psicoanalítica en diálogo con la época y asumir una posición ética frente al sufrimiento contemporáneo, articulando teoría, clínica y práctica aplicada.',
			),
			// Módulos de Clases
			titulo('Módulos de Clases'),
			c('INTRO-MODULOS-CLASES'),
			lista([
				'Módulo 1 | El inconsciente y sus precursores',
				'Módulo 2 | El nudo y los tres registros',
				'Módulo 3 | Escuela Inglesa',
				'Módulo 4 | La subjetividad en tiempos de algoritmos',
				'Módulo 5 | Psicopatología del diagnóstico diferencial',
			]),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/15PtWksUp4L22bBNRbNxmXZMOUyZsh4KE/view?usp=sharing',
			),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-A'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Eres un profesional con formación previa.',
				'Atiendes o deseas consolidar una práctica clínica con orientación psicoanalítica.',
				'Te interesa expandir tu práctica internacional.',
				'Quieres construir una identidad profesional, no acumular cursos.',
				'Te interesa pensar la clínica en diálogo con los desafíos actuales de la subjetividad.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos.',
				'Esperas recetas cerradas.',
				'Buscas certificaciones automáticas sin considerar legislaciones vigentes.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			texto('Beca 60% para profesionales.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			c('FACULTAD-TEXTO-INSTITUCIONAL'),
			c('FACULTAD-PILARES'),
			titulo('El Máster en Psicoanálisis Aplicado articula:'),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Estudio profundo y riguroso del psicoanálisis.',
					'Trabajo con estructuras clínicas y síntomas contemporáneos.',
					'Neurociencia y epigenética en diálogo con el psicoanálisis.',
					'Supervisión clínica real durante la formación.',
					'Espacios de elaboración colectiva internacional.',
					'Articulación entre teoría, caso y práctica.',
				],
				true,
			),
			// Profesores
			titulo('Profesores del máster'),
			c('PROFESORES-INTRO'),
			texto(
				'Universidades e instituciones de procedencia: Universidad de Granada, Universidad de Buenos Aires, Universidad Católica Argentina, Asociación Argentina de Salud Mental, Universidad Abierta Interamericana, Universidad de la Marina Mercante, Consejo Latinoamericano de Ciencias Sociales, Universidad Tecnológica Nacional, Universidad del Aconcagua, Universidad Salesiana, Universidad de Flores, Universidad Católica de Santiago del Estero.',
			),
			lista([
				'Dra. Marta Gerez Ambertín',
				'Lic. Juan Manuel Martínez',
				'Lic. Lara Lizenberg',
				'Lic. Silvia Kargodorian',
				'Lic. Verónica Gerstner',
				'Lic. Lucas Vázquez Topssian',
			]),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIOS-EXTRA-2-ANIOS'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// CTA entrevista
			titulo('Convierte tu deseo de saber en una práctica clínica ética y actual'),
			texto('Agenda una entrevista gratuita y sin compromiso.'),
			enlace('Solicitar entrevista de admisión', ENTREVISTA),
			// Admisión
			titulo('Admisión'),
			texto(
				'El ingreso al Máster se realiza mediante una **Entrevista de Orientación y Admisión** con la Dirección Académica. Esta instancia no es comercial: tiene como objetivo conocer el recorrido, la disponibilidad y tu deseo de formación, para evaluar juntos si este programa es adecuado para tu momento clínico y profesional.',
			),
			lista([
				'Entrevista de admisión obligatoria.',
				'Entrevista gratuita.',
				'Orientación para regulaciones locales.',
				'Becas parciales para perfiles seleccionados.',
				'Se evalúa el recorrido, la disponibilidad y el deseo de formación.',
			]),
			titulo('Matrícula anual', 3),
			texto('€3990 → -60% → €1596 · 25% adicional OFF 1 pago → €1197 · + Planes de financiación'),
			enlace('Agendar entrevista de admisión', ENTREVISTA),
			// Salida Laboral
			titulo('Salida Laboral Internacional'),
			c('FREUD-CITA-TERAPIA-PUEBLO'),
			c('DIRECTORIOS-INSERCION'),
			c('APRENDIZAJE-PRACTICO-SUPERVISADO'),
			// Supervisión
			c('SUPERVISION-CLINICA-COMPLETA'),
			texto('Convierte tu deseo de saber en una práctica clínica ética y actual.'),
			enlace('Solicitar entrevista de admisión', ENTREVISTA),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista([
				'Certificación internacional con reconocimiento académico y clínico.',
				'El ejercicio profesional depende de la normativa vigente en cada país.',
			]),
			enlace(
				'Programa Académico',
				'https://drive.google.com/file/d/15PtWksUp4L22bBNRbNxmXZMOUyZsh4KE/view?usp=sharing',
			),
			texto('*Diploma de muestra.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre el máster / sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
				['No necesariamente.'],
				[
					'El Máster en Psicoanálisis Aplicado (2 años) funciona como un posgrado y requiere formación previa en psicología, psicoterapia u otras disciplinas afines.',
				],
				[
					'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'El **Máster en Psicoanálisis** es una formación de **2 años (72 semanas)** que se cursa en modalidad **100% online**.',
				'La propuesta combina clases grabadas semanales, encuentros en vivo (también disponibles en diferido), lecturas y materiales complementarios, lo que permite una cursada flexible y accesible desde cualquier parte del mundo.',
				'El sistema de evaluación incluye cuestionarios tipo múltiple choice al finalizar cada clase grabada, evaluaciones parciales y un trabajo final integrador de un mínimo de 50 páginas, que debe ser defendido ante la Dirección Académica.',
				'Además, la Facultad prevé dos reagrupamientos presenciales anuales en diferentes países, abiertos a toda la comunidad estudiantil. Estos encuentros permiten a estudiantes, profesores y equipo académico conocerse personalmente y compartir una jornada intensiva de formación en torno a un tema específico, desarrollado a través de conferencias y espacios de diálogo con docentes invitados.',
				'📍 El primer reagrupamiento tuvo lugar el 28 de junio del 2025 en Buenos Aires, Argentina, y marcó el inicio de una tradición que valoramos profundamente: el encuentro entre saber, cuerpo y comunidad. Puedes verlo en nuestro canal de **[YouTube @facultadlalangue](https://www.youtube.com/@facultadlalangue)**.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte al **Máster de Psicoanálisis Aplicado** a través de nuestra **Entrevista de Admisión**.',
				'**Esta instancia no es comercial:** tiene como objetivo conocer tu recorrido, disponibilidad y deseo de formación, para evaluar juntos si este programa es adecuado para tu momento profesional.',
			]),
			c('FAQ-DOCENTES'),
			c('FAQ-ENFOQUE-LACANIANO'),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			enlace('Hablar con un asesor', 'https://wa.link/7dtfge'),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('INSTITUCIONES-ASOCIADAS'),
			c('CTA-INSCRIBIRTE'),
			texto(
				'Formación rigurosa, contemporánea y orientada a la práctica. Psicología y psicoanálisis para los desafíos del presente.',
			),
		],
	},

	/* ------------------------------------------------------------------ */
	/* Diplomatura en Psicoterapia Psicoanalítica                          */
	/* ------------------------------------------------------------------ */
	{
		slug: 'psicoterapia-psicoanalitica',
		titulo: 'Diplomatura en Psicoterapia Psicoanalítica',
		categoria: 'Diplomatura',
		kicker: 'Nuevas Cohortes 09/2026 | Becas del 60%',
		descripcion:
			'Para quienes desean aprender a acompañar desde una perspectiva psicoanalítica contemporánea.',
		duracion: '2 años (72 semanas)',
		modalidad: '100% online',
		dirigidoA:
			'Profesionales y personas con interés en la práctica vocacional del acompañamiento',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto([
				'Este diplomado propone un recorrido formativo de 2 años orientado a quienes desean formarse en psicoterapia con enfoque psicoanalítico, articulando teoría, técnica y práctica clínica. El programa integra los fundamentos psicoanalíticos con herramientas contemporáneas para abordar los malestares psíquicos del siglo XXI.',
				'A lo largo del recorrido se estudian los fundamentos del aparato psíquico, las estructuras clínicas, la infancia, la sexualidad, la intervención en crisis y el trabajo con entrevistas clínicas. La formación combina clases teóricas, espacios clínicos y supervisión, con el objetivo de desarrollar una práctica ética y rigurosa.',
			]),
			// Módulos
			titulo('Módulos de Clases'),
			c('INTRO-MODULOS-CLASES'),
			lista([
				'Módulo 1 | El inconsciente y sus precursores',
				'Módulo 2 | Más allá del principio del placer y segunda tópica',
				'Módulo 3 | Piaget y Freud: desarrollo y constitución psíquica',
				'Módulo 4 | Neurociencia y psicoterapia',
				'Módulo 5 | Más allá de Freud: corrientes postfreudianas',
				'Módulo 6 | Pruebas proyectivas',
				'Módulo 7 | Terapia de pareja y sexología',
				'Módulo 8 | Psicoterapia en crisis y emergencias',
				'Módulo 9 | ¿Cómo comenzar a atender clínicamente?',
			]),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1EkTXHhSseIqKv9i89vhVx8S_QGq7MPsf/view?usp=sharing',
			),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-A'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Eres un profesional con formación previa.',
				'Atiendes o deseas consolidar una práctica clínica con orientación psicoanalítica.',
				'Te interesa expandir tu práctica internacional.',
				'Quieres construir una identidad profesional, no acumular cursos.',
				'Te interesa pensar la clínica en diálogo con los desafíos actuales de la subjetividad.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos.',
				'Esperas recetas cerradas.',
				'Buscas certificaciones automáticas sin considerar legislaciones vigentes.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			c('FACULTAD-TEXTO-INSTITUCIONAL'),
			c('FACULTAD-PILARES'),
			titulo('La Diplomatura en Psicoterapia con orientación psicoanalítica articula:', 3),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Estudio riguroso del psicoanálisis.',
					'Comprensión de las estructuras clínicas.',
					'Diálogo entre psicoanálisis, neurociencia y clínica contemporánea.',
					'Práctica clínica supervisada.',
					'Comunidad académica internacional.',
					'Articulación entre teoría, caso y práctica.',
				],
				true,
			),
			// Profesores
			titulo('Profesores de la diplomatura'),
			c('PROFESORES-INTRO'),
			lista([
				'Lic. Juan Manuel Martínez',
				'Lic. Daniel Camps',
				'Lic. Pía Martina',
				'Lic. Diego Núñez',
				'Lic. Lucas Vázquez Topssian',
				'Lic. Vanesa Carpaneto',
				'Lic. Ester Migrabi',
			]),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIOS-EXTRA-2-ANIOS'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// CTA entrevista
			titulo('Convierte tu deseo de saber en una práctica clínica ética y actual'),
			texto('Agenda una entrevista gratuita y sin compromiso.'),
			enlace('Solicitar entrevista de admisión', ENTREVISTA),
			// Admisión
			titulo('Admisión'),
			texto(
				'El ingreso a la diplomatura se realiza mediante una **Entrevista de Orientación y Admisión** con la Dirección Académica. Esta instancia no es comercial: tiene como objetivo conocer el recorrido, la disponibilidad y tu deseo de formación, para evaluar juntos si este programa es adecuado para tu momento clínico y profesional.',
			),
			lista([
				'Entrevista de admisión obligatoria.',
				'Entrevista gratuita.',
				'Orientación para regulaciones locales.',
				'Becas parciales para perfiles seleccionados.',
				'Se evalúa el recorrido, la disponibilidad y el deseo de formación.',
			]),
			titulo('Matrícula anual', 3),
			texto('€3990 → -60% → €1596 · 25% adicional OFF 1 pago → €1197 · + Planes de financiación'),
			enlace('Agendar entrevista de admisión', ENTREVISTA),
			// Salida Laboral
			titulo('Salida Laboral Internacional'),
			c('FREUD-CITA-TERAPIA-PUEBLO'),
			c('DIRECTORIOS-INSERCION'),
			c('APRENDIZAJE-PRACTICO-SUPERVISADO'),
			// Supervisión
			c('SUPERVISION-CLINICA-COMPLETA'),
			texto('Convierte tu deseo de saber en una práctica clínica ética y actual.'),
			enlace('Solicitar entrevista de admisión', ENTREVISTA),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista([
				'Certificación internacional con reconocimiento académico y clínico.',
				'El ejercicio profesional depende de la normativa vigente en cada país.',
			]),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1Vl_pcb4DAwBHmRKu7RInPPBvNuKn3DiU/view?usp=sharing',
			),
			texto('*Diploma de muestra.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre la diplomatura | sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
				['No necesariamente.'],
				[
					'La Diplomatura en Psicoterapia con enfoque psicoanalítico (2 años) está abierta a profesionales y personas con interés en la práctica vocacional del acompañamiento, inclusive sin estudios previos.',
				],
				[
					'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'La **Diplomatura en Psicoterapia con enfoque psicoanalítico** es una formación de **2 años (72 semanas)** que se cursa en modalidad **100% online**.',
				'La propuesta combina clases grabadas semanales, encuentros en vivo (también disponibles en diferido), lecturas y materiales complementarios, lo que permite una cursada flexible y accesible desde cualquier parte del mundo.',
				'El sistema de evaluación incluye cuestionarios tipo múltiple choice al finalizar cada clase grabada, evaluaciones parciales y un trabajo final integrador de un mínimo de 50 páginas, que debe ser defendido ante la Dirección Académica.',
				'Además, la Facultad prevé dos reagrupamientos presenciales anuales en diferentes países, abiertos a toda la comunidad estudiantil. Estos encuentros permiten a estudiantes, profesores y equipo académico conocerse personalmente y compartir una jornada intensiva de formación en torno a un tema específico, desarrollado a través de conferencias y espacios de diálogo con docentes invitados.',
				'📍 El primer reagrupamiento tuvo lugar el 28 de junio del 2025 en Buenos Aires, Argentina, y marcó el inicio de una tradición que valoramos profundamente: el encuentro entre saber, cuerpo y comunidad. Puedes verlo en nuestro canal de **[YouTube @facultadlalangue](https://www.youtube.com/@facultadlalangue)**.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte al **Diplomado de Psicoterapia con enfoque psicoanalítico** a través de nuestra **Entrevista de Admisión**.',
				'**Esta instancia no es comercial:** tiene como objetivo conocer tu recorrido, disponibilidad y deseo de formación, para evaluar juntos si este programa es adecuado para tu momento profesional.',
			]),
			c('FAQ-DOCENTES'),
			c('FAQ-ENFOQUE-LACANIANO'),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			enlace('Hablar con un asesor', 'https://wa.link/pdk61i'),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('INSTITUCIONES-ASOCIADAS'),
			c('CTA-INSCRIBIRTE'),
		],
	},

	/* ------------------------------------------------------------------ */
	/* Diplomatura Internacional en Subjetividad Digital                    */
	/* ------------------------------------------------------------------ */
	{
		slug: 'subjetividad-digital',
		titulo: 'Diplomatura Internacional en Subjetividad Digital',
		categoria: 'Diplomatura',
		descripcion:
			'Comprende cómo las plataformas digitales, los algoritmos y las dinámicas de las redes sociales están transformando la subjetividad, el bienestar psicológico y las nuevas formas de sufrimiento en la vida online.',
		duracion: '1 año (36 clases), con cursada express de 6 o 3 meses',
		modalidad: '100% online',
		dirigidoA:
			'Profesionales y personas interesadas en el impacto psicológico de la cultura digital',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto([
				'Este diplomado anual propone comprender las **nuevas formas de sufrimiento vinculadas a entornos digitales**, incluyendo fenómenos como dependencia a redes sociales, ansiedad por exposición pública, violencia digital, daño algorítmico y transformaciones en la identidad online.',
				'A lo largo del programa se analizan los efectos psicológicos de las plataformas digitales, el rol de los algoritmos en la producción de subjetividad y los desafíos que enfrentan profesionales de la salud mental, educación y comunicación para acompañar estos fenómenos contemporáneos.',
				'El recorrido combina herramientas provenientes de la psicología contemporánea, la investigación en comportamiento digital y el análisis crítico de las tecnologías emergentes.',
			]),
			// Módulos
			titulo('Módulos de Clases'),
			texto(
				'El programa se organiza en módulos que abordan las transformaciones psicológicas y sociales generadas por la cultura digital. Entre los principales contenidos se trabajan:',
			),
			lista([
				'Módulo 1 | Subjetividad digital y construcción de identidad online',
				'Módulo 2 | Economía de la atención y diseño persuasivo de plataformas',
				'Módulo 3 | Algoritmos, visibilidad y producción de subjetividad',
				'Módulo 4 | Daño algorítmico y amplificación del malestar psicológico',
				'Módulo 5 | Dependencia digital, compulsión a redes sociales y dopamina digital',
				'Módulo 6 | Violencia digital, cancelación y exposición pública',
				'Módulo 7 | Salud mental en entornos digitales',
				'Módulo 8 | Estrategias de intervención y acompañamiento en contextos online',
			]),
			texto(
				'Estos contenidos permiten comprender cómo las tecnologías digitales están transformando las formas contemporáneas de malestar y las prácticas profesionales vinculadas a la salud mental y la educación.',
			),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1kcf2B2QEBrwKXblNo1JrqxsKv7ddv4hm/view?usp=sharing',
			),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-A'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Trabajas en psicología, educación, comunicación o ciencias sociales.',
				'Te interesa comprender cómo las redes sociales y los algoritmos afectan la salud mental y la construcción de identidad.',
				'Quieres adquirir herramientas para analizar el impacto psicológico de la cultura digital.',
				'Buscas comprender las nuevas formas de sufrimiento vinculadas al entorno online.',
				'Te interesa investigar o intervenir en fenómenos contemporáneos como dependencia digital, violencia online o ansiedad por exposición pública.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos o superficiales.',
				'Esperas respuestas simples a fenómenos complejos de la cultura digital.',
				'No tienes interés en comprender críticamente el impacto psicológico de las tecnologías.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			texto('Beca 60% para profesionales.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			texto([
				'Las **tecnologías digitales** no solo transforman la comunicación: transforman también la forma en que las personas perciben su valor, su identidad y su lugar en el mundo.',
				'**Comprender** el impacto psicológico de los algoritmos, la visibilidad digital y las dinámicas de las plataformas se vuelve una tarea central para profesionales que trabajan con subjetividad, educación y bienestar mental.',
				'Este diplomado propone un espacio de **formación interdisciplinaria** para analizar críticamente estos fenómenos y desarrollar herramientas conceptuales y prácticas para abordarlos.',
			]),
			c('FACULTAD-PILARES'),
			titulo(
				'La Diplomatura Internacional en Subjetividad Digital, IA y nuevas formas de sufrimiento online articula:',
				3,
			),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Comprensión psicológica de la subjetividad digital.',
					'Análisis del impacto de algoritmos y plataformas en la identidad.',
					'Estudio de nuevas formas de sufrimiento online.',
					'Herramientas para comprender daño algorítmico y dependencia digital.',
					'Análisis crítico de cultura digital y economía de la atención.',
					'Perspectivas interdisciplinarias para investigación e intervención.',
				],
				true,
			),
			// Profesores
			titulo('Profesores de la diplomatura'),
			c('PROFESORES-INTRO'),
			lista([
				'Lic. Diego Núñez',
				'Lic. Gabriela Artaza Toro',
				'Lic. Yamila Coronel',
				'Lic. Pía Martina',
				'Lic. Vanesa Carpaneto',
			]),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// Planes de financiación
			titulo('Comprende las nuevas formas de sufrimiento en la era digital'),
			titulo('Planes de financiación'),
			...plan('Único pago', '€1660 → €498 **PRECIO FINAL**', ['PLAN 1: -25% menos', 'Elige cuándo terminar'], 10058),
			...plan('6 pagos', '€1660 → **€99,6 euros/mensual**', ['PLAN 6: -10% menos', '€597 en total'], 10057),
			...plan('10 pagos', '€1660 → **€66,5 euros/mensual**', ['Beca 60% para profesionales', '€664 en total'], 10059),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista(['Certificación internacional.', 'Formación online con alcance global.']),
			texto('*El ejercicio profesional en territorio depende de la normativa vigente en cada país.'),
			enlace(
				'Programa Académico',
				'https://drive.google.com/file/d/1kcf2B2QEBrwKXblNo1JrqxsKv7ddv4hm/view?usp=sharing',
			),
			texto('*Diploma de muestra.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre la diplomatura | sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
				['No necesariamente.'],
				[
					'La Diplomatura en Subjetividad Digital (1 año o puedes optar por la cursada express) está abierta a profesionales y personas con interés en los efectos de la hiper digitalización en la subjetividad, inclusive sin estudios previos.',
				],
				[
					'Sin embargo, debes tener en cuenta que la habilitación legal para ejercer como psicoterapeuta en territorio depende de las normativas vigentes en tu país.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'La **Diplomatura en Subjetividad Digital** es una formación que se cursa en **modalidad 100% online** y cuenta con un total de 36 clases.',
				'La propuesta combina clases grabadas disponibles en el campus, junto con materiales complementarios, bibliografía y recursos de profundización, lo que permite una cursada flexible y accesible desde cualquier parte del mundo.',
				'A lo largo del recorrido, se integran espacios de análisis y abordaje de las nuevas formas de subjetividad en entornos digitales, articulando teoría y práctica desde una perspectiva psicoanalítica e interdisciplinaria.',
				'Para quienes necesitan mayor flexibilidad, la diplomatura también puede realizarse en **modalidad express**, permitiendo completarla a su propio ritmo en 6 o incluso 3 meses, adaptándose a diferentes tiempos y objetivos profesionales.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte a través de la **opción de pago** que elijas, en tres simples pasos.',
				'Luego, recibirás a través de email los accesos al Campus paso a paso.',
				'*Ten en cuenta también que el valor monetario no sea un impedimento para formarte en FIPP Lalangue: si te encuentras condicionada/o escríbenos, que juntos encontraremos un camino viable.',
			]),
			c('FAQ-DOCENTES'),
			faq('¿El enfoque es exclusivamente lacaniano?', [
				'**No.** La **Diplomatura en Subjetividad Digital** aborda los fenómenos contemporáneos desde una perspectiva psicoanalítica, pero en articulación con múltiples enfoques necesarios para comprender la complejidad de la era digital.',
				'El programa integra aportes de la *psicología, el psicoanálisis, las neurociencias, el campo legal y la ética*, permitiendo analizar cómo la tecnología, las redes sociales y la inteligencia artificial impactan en la subjetividad, los vínculos y la salud mental.',
				'Desde la Facultad, proponemos una formación interdisciplinaria y actualizada, en diálogo con los desarrollos más recientes en investigación y práctica clínica, convocando a especialistas de distintos campos para ofrecer una lectura amplia, rigurosa y situada de los nuevos modos de sufrimiento en entornos digitales.',
			]),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('CTA-INSCRIBIRTE'),
		],
	},

	/* ------------------------------------------------------------------ */
	/* Diplomatura en Clínica de Parejas y Erotismo Relacional              */
	/* ------------------------------------------------------------------ */
	{
		slug: 'clinica-de-parejas',
		titulo: 'Diplomatura en Clínica de Parejas y Erotismo Relacional',
		categoria: 'Diplomatura',
		descripcion:
			'Las relaciones de pareja siempre aparecen: en los conflictos, en los síntomas, en la historia. Formate con herramientas contemporáneas para una integración clínica aplicable.',
		duracion: '1 año, con cursada express de 6 o 3 meses',
		modalidad: '100% online',
		dirigidoA: 'Psicólogos, terapeutas y profesionales del campo de la salud mental',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto([
				'En un contexto marcado por transformaciones culturales, cambios en los modelos de pareja y ampliación de los discursos sobre el deseo, el amor y la sexualidad, la **Diplomatura en Clínica de Parejas y Erotismo Relacional** analiza críticamente los nuevos desafíos clínicos y propone una formación rigurosa y actualizada orientada a profesionales interesados en profundizar su abordaje terapéutico de los vínculos sexoafectivos contemporáneos.',
				'La propuesta articula teoría y práctica clínica para ofrecer herramientas terapéuticas eficaces, éticas y contextualizadas, abordando las mutaciones del lazo vincular, del erotismo y de la subjetividad contemporánea en diálogo con cuatro corrientes psicoterapéuticas: psicoanálisis, enfoque sistémico, terapia cognitivo-conductual e integrativa, favoreciendo una mirada plural e inclusiva para intervenir en las complejas configuraciones relacionales actuales.',
			]),
			// Módulos
			titulo('Módulos de Clases'),
			c('INTRO-MODULOS-CLASES'),
			lista([
				'Módulo 1 | Fundamentos de la clínica vincular y sexual',
				'Módulo 2 | Historia y evolución de la terapia de pareja',
				'Módulo 3 | Sexualidad humana y rol del terapeuta en consulta sexológica',
				'Módulo 4 | Dinámicas de pareja, apego y mandatos amorosos',
				'Módulo 5 | Patrones vinculares disfuncionales: celos, control, dependencia emocional e infidelidad',
				'Módulo 6 | Sexualidad, disfunciones sexuales y nuevos modelos vinculares',
				'Módulo 7 | Intervenciones clínicas en diversidad relacional y vínculos no monogámicos',
				'Módulo 8 | Parejas en transición: crisis afectivas, duelo, infertilidad y parentalidad',
				'Módulo 9 | Sexualidades diversas, cuerpos y subjetividades contemporáneas',
				'Módulo 10 | Modelos teóricos de terapia de pareja: psicoanálisis, sistémica, TCC e integrativa',
				'Módulo 11 | Técnicas clínicas contemporáneas: EFT, terapia narrativa, mindfulness y recursos integrativos',
				'Módulo 12 | Intervenciones en contextos de vulnerabilidad, enfermedad, discapacidad o consumo problemático',
			]),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1Fgr1rFgMnVFESmeq2v-i7_CyhzcloIR-/view?usp=sharing',
			),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-B'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Eres psicólogo, terapeuta o profesional del campo de la salud mental.',
				'Te interesa comprender la complejidad de los vínculos de pareja y la sexualidad en la actualidad.',
				'Buscas herramientas clínicas para intervenir en conflictos vinculares, crisis afectivas y problemáticas sexuales.',
				'Deseas ampliar tu práctica profesional en terapia de pareja y clínica relacional.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos sin formación clínica profunda.',
				'Esperas recetas terapéuticas cerradas para problemas complejos.',
				'No tienes interés en trabajar con diversidad relacional, sexual o cultural.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			texto('Beca 60% para profesionales.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			texto([
				'Los **vínculos sexoafectivos contemporáneos** atraviesan profundas transformaciones culturales, tecnológicas y subjetivas.',
				'**Comprender** la complejidad del deseo, la intimidad, la diversidad sexual y las nuevas configuraciones vinculares se vuelve fundamental para los profesionales que trabajan con la salud mental y las relaciones humanas.',
				'Este diplomado propone una **formación clínica integradora** que articula teoría, práctica y análisis de casos, favoreciendo una intervención profesional ética, contextualizada y respetuosa de la diversidad.',
			]),
			c('FACULTAD-PILARES'),
			titulo('La Diplomatura en Clínica de Parejas y Erotismo Relacional articula:', 3),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Comprensión clínica de los vínculos de pareja y la sexualidad contemporánea.',
					'Integración de diferentes modelos psicoterapéuticos para el trabajo con parejas.',
					'Análisis de dinámicas relacionales complejas y patrones vinculares disfuncionales.',
					'Herramientas terapéuticas para abordar conflictos, crisis afectivas y disfunciones sexuales.',
					'Perspectiva de género, diversidad sexual y derechos en la práctica clínica.',
					'Articulación entre teoría, intervención clínica y análisis de casos.',
				],
				true,
			),
			// Profesores
			titulo('Profesores de la diplomatura'),
			c('PROFESORES-INTRO'),
			lista([
				'Lic. Gabriela Artaza Toro',
				'Lic. Diego Núñez',
				'Lic. Alejandra Giudice',
				'Lic. Sebastián Mosquera',
				'Lic. Noelia Benedetto',
			]),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// Planes de financiación
			titulo('Amplía tu práctica clínica con parejas y erotismo relacional'),
			titulo('Planes de financiación'),
			...plan('Único pago', '€1660 → €498 **PRECIO FINAL**', ['PLAN 1: -25% menos', 'Cursa a tu ritmo'], 9544),
			...plan('6 pagos', '€1660 → **€99,6 euros/mensual**', ['PLAN 6: -10% menos', '€597 en total'], 9545),
			...plan('10 pagos', '€1660 → **€66,5 euros/mensual**', ['Beca 60% para profesionales', '€664 en total'], 9546),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista(['Certificación internacional.', 'Formación online con alcance global.']),
			texto('*El ejercicio profesional en territorio depende de la normativa vigente en cada país.'),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1Fgr1rFgMnVFESmeq2v-i7_CyhzcloIR-/view?usp=sharing',
			),
			texto('*Diploma de muestra.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre la diplomatura | sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
				['No necesariamente.'],
				[
					'La Diplomatura en Clínica de Parejas (1 año o puedes optar por la cursada express) está abierta a profesionales y personas con interés en la práctica vocacional del acompañamiento, inclusive sin estudios previos.',
				],
				[
					'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'La **Diplomatura en Clínica de Parejas y Erotismo Relacional** es una formación de 1 año, que se cursa en modalidad 100% online.',
				'La propuesta combina una clase grabada semanal disponible en el campus, junto con encuentros en vivo una vez al mes con profesores de la formación (también accesibles en diferido), lo que permite sostener una experiencia formativa dinámica, acompañada y flexible desde cualquier parte del mundo.',
				'Además, la cursada incluye lecturas, materiales complementarios y espacios clínicos que articulan teoría y práctica, favoreciendo una formación rigurosa y aplicada al trabajo con vínculos contemporáneos.',
				'Para quienes necesitan mayor flexibilidad, la diplomatura también puede realizarse en **modalidad express**, permitiendo completarla a su propio ritmo en 6 o incluso 3 meses, adaptándose a diferentes tiempos y objetivos profesionales.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte a través de la **opción de pago** que elijas, en tres simples pasos.',
				'Luego, recibirás a través de email los accesos al Campus paso a paso.',
				'*Ten en cuenta también que el valor monetario no sea un impedimento para formarte en FIPP Lalangue: si te encuentras condicionada/o escríbenos, que juntos encontraremos un camino viable.',
			]),
			c('FAQ-DOCENTES'),
			faq('¿El enfoque es exclusivamente lacaniano?', [
				'**No.** Si bien la formación incluye una sólida base psicoanalítica, la **Diplomatura en Clínica de Parejas y Erotismo Relacional** integra los principales enfoques que hoy estructuran la práctica clínica contemporánea en el trabajo con parejas.',
				'Los desarrollos más actuales en investigación y clínica señalan cuatro grandes perspectivas de referencia: *el psicoanálisis, el enfoque sistémico, la terapia cognitivo-conductual (TCC) y los modelos integrativos*. Nuestra propuesta articula estos enfoques de manera rigurosa y complementaria, permitiendo una comprensión más amplia y eficaz de los vínculos sexoafectivos.',
				'Desde la Facultad, apostamos a una formación en diálogo con la vanguardia clínica, convocando a profesionales y referentes especializados en cada una de estas corrientes, con el objetivo de brindar herramientas actualizadas, éticas y aplicables a la complejidad de la clínica de pareja en la actualidad.',
			]),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('CTA-INSCRIBIRTE'),
		],
	},

	/* ------------------------------------------------------------------ */
	/* Diplomatura en Psicopatología Infanto-Juvenil                        */
	/* ------------------------------------------------------------------ */
	{
		slug: 'psicopatologia-infanto-juvenil',
		titulo: 'Diplomatura en Psicopatología Infanto-Juvenil',
		categoria: 'Diplomatura',
		descripcion:
			'Para quienes deseen especializarse en psicopatología y clínica infantojuvenil desde una perspectiva psicoanalítica contemporánea, articulada con un enfoque interdisciplinario y ético.',
		duracion: '1 año (36 clases obligatorias + optativas)',
		modalidad: '100% online',
		dirigidoA:
			'Profesionales del campo de la salud mental, la educación y el acompañamiento de infancias y adolescencias',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto([
				'El **psiquismo en niños, niñas y adolescentes** está en plena constitución, por lo que los síntomas deben leerse en relación con dimensiones estructurales, evolutivas y socioculturales, evitando trasladar categorías propias de la clínica adulta y toda patologización, para una intervención situada y respetuosa.',
				'Este diplomado propone un abordaje especializado de la Psicopatología Infanto-Juvenil desde una perspectiva psicoanalítica contemporánea, interdisciplinaria y ética. A lo largo del recorrido se analizan diversas presentaciones clínicas (como depresiones, fobias, trastornos psicosomáticos, TDA, TEA y diversas patologías) integrando diagnóstico, abordaje clínico y trabajo con familias e instituciones.',
			]),
			// Módulos
			titulo('Módulos de Clases'),
			texto('El programa está organizado en módulos que abordan los principales desafíos de la clínica infantojuvenil contemporánea.'),
			lista([
				'Módulo 1 | Psicopatología clínica infantojuvenil',
				'Módulo 2 | Marco legal protectorio de Niños y Adolescentes',
				'Módulo 3 | Psicopatología clínica en los inicios de la constitución subjetiva',
				'Módulo 4 | Patologías, discapacidades y trastornos en Niñez: su clínica y praxis',
				'Módulo 5 | Violencias sexuales en la infancia: abordaje clínico actual',
				'Módulo 6 | Avatares clínicos: duelo, depresión y neurosis en la infancia',
				'Módulo 7 | Cuerpo, psiquismo y plasticidad en la clínica con Niños y Adolescentes',
			]),
			// Clase abierta
			titulo('Vive la experiencia: Clase abierta sin costo'),
			texto(
				'**¿Cómo trabajamos el mundo interno en la niñez?** Descúbrelo en nuestra clase **«La asombrosa capacidad de imaginar»**. De la mano de *Lorena Salthu* (Decana de la facultad) y *Augusto Laplacette*, te invitamos a explorar los fundamentos de nuestra formación.',
			),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-B'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Trabajas en el campo de la salud mental, la educación o el acompañamiento de infancias y adolescencias.',
				'Te interesa especializarte en psicopatología y clínica infantojuvenil.',
				'Buscas herramientas clínicas para el abordaje de síntomas y sufrimiento psíquico en niños, niñas y adolescentes.',
				'Deseas intervenir de forma interdisciplinaria, ética y situada, evitando la patologización.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos sin formación clínica profunda.',
				'Esperas recetas terapéuticas cerradas para problemas complejos.',
				'No tienes interés en trabajar con la singularidad infantojuvenil.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			texto('Beca 60% para profesionales.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			texto([
				'La **psicopatología infanto-juvenil** requiere comprender los modos de sufrimiento situando los síntomas en procesos de constitución subjetiva en permanente transformación, y a través de una mirada clínica que contemple los cambios culturales, sociales y familiares que atraviesan las infancias.',
				'Abordar estas problemáticas desde el psicoanálisis contemporáneo es fundamental para profesionales que buscan intervenir con una perspectiva crítica y actualizada, ya que permite leer la singularidad de cada caso, articulando diagnóstico, vínculos y contexto.',
			]),
			c('FACULTAD-PILARES'),
			titulo('La Diplomatura en Psicopatología Infanto-Juvenil articula:', 3),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Comprensión clínica del psiquismo en constitución en niños, niñas y adolescentes.',
					'Integración del psicoanálisis con enfoques interdisciplinarios actuales.',
					'Análisis de presentaciones clínicas y diagnósticos diferenciales en la infancia y adolescencia.',
					'Herramientas clínicas para el abordaje de síntomas, sufrimiento psíquico y problemáticas actuales.',
					'Perspectiva de derechos, diversidad y ética en la práctica con NNyA.',
					'Articulación entre teoría, clínica, trabajo con familias y análisis de casos.',
				],
				true,
			),
			// Profesores
			titulo('Profesores de la diplomatura'),
			c('PROFESORES-INTRO'),
			lista([
				'Lic. Macarena Cao Gene',
				'Lic. Julián Porri',
				'Lic. Irina Poletti',
				'Lic. Juan Augusto Laplacette',
				'Lic. Viviana Estanga',
			]),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// Planes de financiación
			titulo('Amplía tu práctica clínica con conocimientos de psicopatología infantojuvenil'),
			titulo('Planes de financiación'),
			...plan('Único pago', '€1800 → €540 **PRECIO FINAL**', ['PLAN 1: -25% menos', 'Cursa a tu ritmo'], 9546),
			...plan('6 pagos', '€1800 → **€108 euros/mensual**', ['PLAN 6: -10% menos', '€648 en total'], 9546),
			...plan('10 pagos', '€1800 → **€72 euros/mensual**', ['Beca 60% para profesionales', '€720 en total'], 9546),
			// Admisión
			titulo('Admisión'),
			texto(
				'El ingreso al diplomado se realiza mediante una **Entrevista de Orientación y Admisión** con la Dirección Académica. Esta instancia no es comercial: tiene como objetivo conocer el recorrido, la disponibilidad y tu deseo de formación, para evaluar juntos si este programa es adecuado para tu momento clínico y profesional.',
			),
			lista([
				'Entrevista de admisión obligatoria.',
				'Entrevista gratuita.',
				'Orientación para regulaciones locales.',
				'Becas parciales para perfiles seleccionados.',
				'Se evalúa el recorrido, la disponibilidad y el deseo de formación.',
			]),
			titulo('Matrícula Anual', 3),
			lista(['Beca de admisión del 60%', 'Planes de financiación disponibles']),
			texto('€1800 → **€540 euros/año**'),
			enlace('Entrevista de admisión', ENTREVISTA),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista(['Certificación internacional.', 'Formación online con alcance global.']),
			texto('*El ejercicio profesional en territorio depende de la normativa vigente en cada país.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre la diplomatura | sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en las formaciones?',
				['No necesariamente.'],
				[
					'La Diplomatura en Psicopatología Infanto-Juvenil (1 año o puedes optar por la cursada express) está abierta a profesionales y personas con interés en el estudio y/o la práctica vocacional del acompañamiento, inclusive sin estudios previos.',
				],
				[
					'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'La **Diplomatura en Psicopatología Clínica Infantojuvenil** es una formación que se cursa en **modalidad 100% online** y cuenta con un total de **36 clases obligatorias**, además de clases optativas de profundización.',
				'La propuesta combina **clases grabadas** disponibles en el campus, junto con encuentros sincrónicos con docentes de la formación, lo que permite una experiencia de cursada acompañada, dinámica y accesible desde cualquier parte del mundo.',
				'**El sistema de evaluación** incluye cuestionarios tipo múltiple choice al finalizar cada clase, favoreciendo la integración progresiva de los contenidos y el seguimiento del aprendizaje.',
				'A lo largo del recorrido, la formación articula un enfoque psicoanalítico con una perspectiva integrativa e interdisciplinaria, abordando la clínica infantojuvenil desde una mirada contemporánea, ética y contextualizada.',
				'Para quienes decidan continuar su formación en la **Diplomatura en Psicoterapia con enfoque psicoanalítico**, esta materia será considerada como válida dentro de una de las materias anuales del primer año, permitiendo articular y profundizar el recorrido académico dentro de la Facultad.',
				'Para quienes necesitan mayor flexibilidad, la diplomatura también puede realizarse en **modalidad express**, permitiendo completarla a su propio ritmo en 6 o incluso 3 meses, adaptándose a diferentes tiempos y objetivos profesionales.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte a través de la **opción de pago** que elijas, en tres simples pasos.',
				'Luego, recibirás a través de email los accesos al Campus paso a paso.',
				'*Ten en cuenta también que el valor monetario no sea un impedimento para formarte en FIPP Lalangue: si te encuentras condicionada/o escríbenos, que juntos encontraremos un camino viable.',
			]),
			c('FAQ-DOCENTES'),
			faq('¿El enfoque es exclusivamente lacaniano?', [
				'**No.** Si bien la formación se apoya en una sólida base psicoanalítica, la **Diplomatura en Psicopatología Clínica Infantojuvenil** propone un abordaje integrativo e interdisciplinario, necesario para comprender la complejidad del psiquismo en niños, niñas y adolescentes.',
				'El programa articula el psicoanálisis con aportes de *la psicología del desarrollo, la psiquiatría, la neuropsicología y el campo socio-jurídico*, incorporando también la perspectiva de derechos, los contextos familiares y los factores culturales que inciden en la constitución subjetiva.',
				'Desde la Facultad, promovemos una lectura clínica crítica, ética y contemporánea, que evita la patologización reduccionista y permite intervenir de manera situada, convocando a profesionales de distintas disciplinas para ofrecer herramientas sólidas y actualizadas frente a los desafíos de la clínica infantojuvenil actual.',
			]),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('CTA-INSCRIBIRTE'),
		],
	},

	/* ------------------------------------------------------------------ */
	/* Diplomatura en Metapsicología: Introducción a la lógica psicoanalítica */
	/* ------------------------------------------------------------------ */
	{
		slug: 'metapsicologia',
		titulo: 'Diplomatura en Metapsicología: Introducción a la lógica psicoanalítica',
		categoria: 'Diplomatura',
		descripcion:
			'Para quienes desean aprender a acompañar desde una perspectiva psicoanalítica contemporánea.',
		duracion: '1 año, con cursada express de 6 o 3 meses',
		modalidad: '100% online',
		dirigidoA: 'Profesionales de la salud, educación o acompañamiento',
		secciones: [
			c('INSIGNIAS-INSTITUCIONALES'),
			texto([
				'Este diplomado propone un recorrido formativo de 1 año, con posibilidad de cursada express en 6 o 3 meses, orientado a quienes desean formarse en las **bases de la teoría psicoanalítica** articulada con técnica y práctica clínica. El programa integra los fundamentos psicoanalíticos con herramientas contemporáneas para abordar los malestares psíquicos del siglo XXI.',
				'A lo largo del recorrido se estudian los **fundamentos del aparato psíquico**, las estructuras clínicas, la sexualidad, la intervención y las diversas voces del psicoanálisis. La formación combina clases teóricas, espacios clínicos y supervisión, con el objetivo de desarrollar una práctica ética y rigurosa.',
			]),
			// Módulos
			titulo('Módulos de Clases'),
			c('INTRO-MODULOS-CLASES'),
			lista([
				'Módulo 1 | El inconsciente y sus precursores',
				'Módulo 2 | Introducción al narcisismo',
				'Módulo 3 | Pulsiones y destinos de la pulsión',
				'Módulo 4 y 5 | Segunda tópica y masoquismo',
				'Módulo 6 | Angustia, síntoma y cultura',
				'Módulo 7 | Más allá de Freud',
			]),
			enlace(
				'Programa académico',
				'https://drive.google.com/file/d/1BB9wfFESwhoiBhcvOpADKjERVSXgJH7v/view?usp=sharing',
			),
			// Profesores (en esta página van antes que la metodología)
			titulo('Profesores de la diplomatura'),
			c('PROFESORES-INTRO'),
			texto(
				'Universidades e instituciones de procedencia: Universidad de Granada, Universidad de Buenos Aires, Universidad Católica Argentina, Asociación Argentina de Salud Mental, Universidad Abierta Interamericana, Universidad de la Marina Mercante, Consejo Latinoamericano de Ciencias Sociales, Universidad Tecnológica Nacional, Universidad del Aconcagua, Universidad Salesiana, Universidad de Flores, Universidad Católica de Santiago del Estero.',
			),
			texto(
				'También los leíste en: News.MC, CEC Times, Reuters, La Nación, Revista Praxis Filosófica, Sputnik, Universidad del Valle Programa Editorial, Página 12.',
			),
			lista([
				'Lic. Juan Manuel Martínez',
				'Lic. Daniel Camps',
				'Lic. Pía Martina',
				'Lic. Ester Migrabi',
				'y otros referentes del mundo psy',
			]),
			// Metodología
			titulo('Metodología'),
			c('METODOLOGIA-CABECERA'),
			c('METODOLOGIA-MODALIDAD-A'),
			c('METODOLOGIA-CONTADORES'),
			titulo('Es para ti si:', 3),
			lista([
				'Eres profesional de la salud, educación o acompañamiento.',
				'Deseas comprender los vectores de lectura psicoanalítica.',
				'Te interesa comprender el sufrimiento humano más allá de diagnósticos rápidos.',
				'Buscas una formación rigurosa que articule teoría, clínica y práctica.',
			]),
			titulo('No es para ti si:', 3),
			lista([
				'Buscas cursos rápidos sin formación clínica profunda.',
				'Esperas recetas terapéuticas cerradas para problemas complejos.',
				'No tienes interés en trabajar con la singularidad del inconsciente.',
			]),
			texto('**Amplía tu recorrido** según tu interés clínico o teórico.'),
			texto('Beca 60% para profesionales.'),
			// La Facultad
			titulo('La Facultad'),
			c('FACULTAD-SUPERVISION-GRATUITA'),
			// Variante Metapsicología de FACULTAD-TEXTO-INSTITUCIONAL:
			// última frase distinta, por eso va como bloque propio (mismo render).
			texto([
				'El psicoanálisis no se transmite como un conjunto de herramientas ni como un **saber estandarizado**.',
				'**Se construye en el tiempo**, en la lectura rigurosa, en la práctica clínica y en el trabajo con otros.',
				'**Facultad Lalangue** escucha los *murmullos de la época* y propone un espacio de formación que articula pensamiento, clínica y comunidad.',
			]),
			c('FACULTAD-PILARES'),
			titulo(
				'La Diplomatura en Metapsicología: Introducción a la lógica psicoanalítica articula:',
				3,
			),
			c('FACULTAD-LEMA'),
			lista(
				[
					'Estudio riguroso del psicoanálisis.',
					'Comprensión de las estructuras clínicas.',
					'Diálogo entre psicoanálisis, neurociencia y clínica contemporánea.',
					'Práctica clínica supervisada.',
					'Comunidad académica internacional.',
					'Articulación entre teoría, caso y práctica.',
				],
				true,
			),
			// Beneficios
			c('BENEFICIOS-INTRO'),
			c('BENEFICIO-INSCRIPCION-BONIFICADA'),
			c('BENEFICIO-PERFIL-TIMETOBETTER'),
			c('BENEFICIO-GRUPOS-SUPERVISION'),
			c('BENEFICIOS-TOTAL'),
			// Planes de financiación
			titulo('Convierte tu deseo de saber en una práctica clínica ética y actual'),
			titulo('Planes de financiación'),
			...plan('Único pago', '€1800 → €540 **PRECIO FINAL**', ['PLAN 1: -25% menos', 'Cursa a tu ritmo'], 10054),
			...plan('6 pagos', '€1800 → **€108 euros/mensual**', ['PLAN 6: -10% menos', '€648 en total'], 10053),
			...plan('10 pagos', '€1800 → **€72 euros/mensual**', ['Beca 60% para profesionales', '€720 en total'], 9546),
			// Admisión
			titulo('Admisión'),
			texto(
				'El ingreso a la diplomatura se realiza mediante una **Entrevista de Orientación y Admisión** con la Dirección Académica. Esta instancia no es comercial: tiene como objetivo conocer el recorrido, la disponibilidad y tu deseo de formación, para evaluar juntos si este programa es adecuado para tu momento clínico y profesional.',
			),
			lista([
				'Entrevista de admisión obligatoria.',
				'Entrevista gratuita.',
				'Orientación para regulaciones locales.',
				'Becas parciales para perfiles seleccionados.',
				'Se evalúa el recorrido, la disponibilidad y el deseo de formación.',
			]),
			titulo('Matrícula Anual', 3),
			lista(['Beca de admisión del 60%', 'Planes de financiación disponibles']),
			texto('€1800 → **€540 euros/año**'),
			enlace('Entrevista de admisión', ENTREVISTA),
			// Inserción
			titulo('Inserción Laboral'),
			c('INSERCION-ESTADISTICAS'),
			// Certificación
			titulo('Certificación'),
			c('CERTIFICACION-INTRO'),
			lista([
				'Certificación internacional con reconocimiento académico y clínico.',
				'El ejercicio profesional depende de la normativa vigente en cada país.',
			]),
			enlace(
				'Programa Académico',
				'https://drive.google.com/file/d/1BB9wfFESwhoiBhcvOpADKjERVSXgJH7v/view?usp=sharing',
			),
			texto('*Diploma de muestra.'),
			// FAQ
			titulo('Preguntas Frecuentes', 2, 'sobre la diplomatura | sobre la entrevista'),
			c('FAQ-LISTA-FORMACIONES'),
			faq(
				'¿Necesito ser psicólogo/a para inscribirme en esta diplomatura?',
				['No necesariamente.'],
				[
					'La Diplomatura en Metapsicología: Introducción a la teoría psicoanalítica (1 año o puedes optar por la cursada express) está abierta a profesionales y personas con interés en comprender la teoría psicoanalítica, inclusive sin estudios previos.',
				],
				[
					'Sin embargo, debes tener en cuenta que la **habilitación legal para ejercer como psicoterapeuta depende de las normativas vigentes en tu país**.',
				],
			),
			c('FAQ-TITULO-OFICIAL'),
			faq('¿Cuál es la duración de las formaciones y cuál es la modalidad?', [
				'La **Diplomatura en Metapsicología: Introducción a la Teoría Psicoanalítica** es una formación que se cursa en **modalidad 100% online** y cuenta con un recorrido estructurado a través de clases grabadas disponibles en el campus, junto con encuentros sincrónicos con docentes de la formación.',
				'La propuesta se complementa con *materiales de lectura y recursos académicos* que permiten una cursada flexible y accesible desde cualquier parte del mundo, favoreciendo la comprensión progresiva de los conceptos fundamentales del psicoanálisis.',
				'*El sistema de evaluación* incluye cuestionarios tipo multiple choice al finalizar cada clase, acompañando la integración de contenidos y el seguimiento del proceso de aprendizaje.',
				'A lo largo del recorrido, la formación introduce los conceptos centrales de la teoría psicoanalítica desde una perspectiva rigurosa y articulada con la clínica contemporánea, constituyendo una base sólida para desarrollos posteriores.',
				'Para quienes decidan continuar su formación en la **Diplomatura en Psicoterapia** con enfoque psicoanalítico, este programa será considerado como equivalente a la materia de ***Metapsicología*** del primer año, permitiendo articular y profundizar el recorrido académico dentro de la Facultad.',
				'Para quienes necesitan mayor flexibilidad, la formación también puede realizarse en **modalidad express**, permitiendo completarla a su propio ritmo en 6 o incluso 3 meses, adaptándose a diferentes tiempos y objetivos profesionales.',
			]),
			c('FAQ-MEMBRESIA-GRATUITA'),
			faq('¿Cómo me inscribo y cuándo comienza la formación?', [
				'Puedes inscribirte a través de la **opción de pago** que elijas, en tres simples pasos.',
				'Luego, recibirás a través de email los accesos al Campus paso a paso.',
				'*Ten en cuenta también que el valor monetario no sea un impedimento para formarte en FIPP Lalangue: si te encuentras condicionada/o escríbenos, que juntos encontraremos un camino viable.',
			]),
			c('FAQ-DOCENTES'),
			faq('¿El enfoque es exclusivamente lacaniano?', [
				'**No.** La Diplomatura en Metapsicología: Introducción a la Teoría Psicoanalítica introduce a la lógica freudiana como fundamento del psicoanálisis, al mismo tiempo que recorre los desarrollos y pensamientos de las distintas voces que han enriquecido el campo psicoanalítico a lo largo del tiempo.',
				'La formación articula los aportes de *Sigmund Freud* con otras lecturas contemporáneas, permitiendo una comprensión plural, rigurosa y crítica de la teoría psicoanalítica.',
				'Desde la Facultad, proponemos una transmisión que no se reduce a una única corriente, sino que abre el diálogo entre distintas perspectivas, situando la metapsicología en relación con la clínica actual y los desafíos de la subjetividad contemporánea.',
			]),
			c('FAQ-ESTUDIANTE-PSICOLOGIA'),
			c('FAQ-ENTREVISTA-ADMISION'),
			// Newsletter
			titulo('Newsletter'),
			texto('Recibe contenido exclusivo y novedades del Máster.'),
			texto(
				'Novedades, aperturas de convocatoria y contenidos breves para acompañar una práctica clínica ética y actual.',
			),
			// Cierre
			c('OTRAS-FORMACIONES-LISTADO'),
			c('INSTITUCIONES-ASOCIADAS'),
			c('CTA-INSCRIBIRTE'),
		],
	},
];