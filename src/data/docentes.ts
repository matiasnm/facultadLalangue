/**
 * Bios del plantel — fuente: docs/docentes.md.
 *
 * Las bios se guardan en un mapa indexado por nombre normalizado
 * (sin títulos ni acentos, en minúsculas). Cada persona del plantel se
 * construye con conBio() y, si su nombre normalizado existe en el mapa,
 * se le asocia la bio; si no, la card queda sin bio y el popup muestra el
 * aviso "todavía no tenemos publicada su bio".
 *
 * Los arreglos `directores` y `docentes` están en el orden en que se
 * renderizan en /plantel-academico.
 */

export type PersonaPlantel = {
	nombre: string;
	titulo?: string;
	bio?: string[];
};

/** Sin títulos, sin acentos, lowercase, un solo espacio. */
export function normalizarNombre(nombre: string): string {
	return nombre
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/^(lic\.?|dra?\.?|mtr\.?|mg\.?|prof\.?|esp\.?)\s+/i, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Siglas del avatar placeholder: "Juan Manuel Martínez" → "JM". */
export function siglasDe(nombre: string): string {
	const palabras = normalizarNombre(nombre).split(/\s+/).filter(Boolean);
	return palabras.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join('');
}

const bios: Record<string, string[]> = {
	'diego nunez': [
		'Psicólogo especializado en psicología de la emergencia, manejo del estrés e intervención con víctimas. Doctorando en Educación Superior Universitaria, dirige programas académicos y diplomaturas en salud mental, resolución de conflictos y atención en crisis en universidades de América Latina.',
		'Es presidente de la International Federation of Emergency Psychology y referente regional en la formación de fuerzas de seguridad y equipos de emergencia. Ha coordinado operativos internacionales como el “Regreso Seguro” desde Cancillería Argentina, y es autor de múltiples publicaciones sobre psicología de la emergencia, autocuidado y apoyo humanitario.',
		'Primer bombero psicólogo de Argentina, ha formado a profesionales en más de cinco países, promoviendo un enfoque integral y humanitario ante catástrofes, violencia y situaciones críticas.',
	],
	'gabriela artaza toro': [
		'Psicóloga (UBA), profesora universitaria en Psicología y máster en Sexología y Salud Sexual (Universidad Euneiz, España). Se ha especializado en clínica, educación sexual y políticas públicas, con posgrados en sexología clínica (UBA), psicoanálisis (Hospital Alvear), terapia de pareja y terapia de grupos (Escuela Sistémica Argentina).',
		'Cuenta con amplia formación en educación sexual integral, prevención de adicciones y trabajo en equipos de orientación escolar, desarrollada en articulación con universidades nacionales y organismos estatales. Actualmente preside el Capítulo de Sexología Positiva y Salud Mental de la Asociación Argentina de Salud Mental (AASM).',
		'Su recorrido combina clínica, docencia y gestión interdisciplinaria, con un fuerte compromiso en la transmisión y el diseño de intervenciones que articulan psicoanálisis, educación y derechos sexuales y reproductivos.',
	],
	'marta gerez ambertin': [
		'Doctora en Psicología (UNT), máster en Teoría Psicoanalítica (CIEP, México) y posdoctorada en Psicología Clínica con mención en Psicoanálisis (PUC-SP, Brasil). Psicoanalista, investigadora y docente de reconocida trayectoria internacional, actualmente es profesora titular en la Universidad Católica de Santiago del Estero y docente de posgrado en la Universidad del Aconcagua.',
		'Fue profesora en la UNT y dictó seminarios en universidades de América Latina, Europa y Estados Unidos. Es autora de obras fundamentales como *Las voces del superyó*, *Imperativos del superyó*, *Entre deudas y culpas* y la serie *Culpa, responsabilidad y castigo*, traducidas y reeditadas en varios países.',
		'Integró comités evaluadores del CONICET y la CONEAU, y forma parte de consejos editoriales de revistas científicas en Brasil, Colombia y Argentina. Su pensamiento articula clínica, ley, cultura y ética desde una lectura freudo-lacaniana rigurosa y comprometida con las problemáticas contemporáneas.',
	],
	'juan manuel martinez': [
		'Psicoanalista, magíster en Psicoanálisis por la Universidad del Aconcagua y licenciado en Psicología por el Centro Eleia (México). Es docente de Psicoanálisis I, II y Clínica del Adulto en la Universidad Católica Argentina, y profesor del Máster en Psicoanálisis de la Universidad de Granada (España).',
		'Ha dictado seminarios, workshops y conferencias en diversas universidades y espacios de formación en México, Chile, Brasil, España y otros países de América Latina. Entre sus publicaciones se destacan *Lacan fuera del aula*, *Freud, lector de Nietzsche*, *La transferencia en los Escritos de Lacan* y *Técnica lacaniana*.',
		'Su trabajo se centra en la transmisión viva del psicoanálisis lacaniano y en el esclarecimiento de su técnica desde una perspectiva rigurosa y actual.',
	],
	'lara lizenberg': [
		'Psicoanalista con más de 20 años de experiencia clínica con adultos y 10 años con niños. Ha sido docente universitaria en la Universidad de Buenos Aires por más de 15 años (Psicoanálisis Freud y Clínica Psicoanalítica) y Profesora Adjunta en la Universidad Abierta Interamericana en la cátedra “Historiales clínicos”.',
		'También ha dictado cursos de posgrado en Fundación Tiempo: “La madre como pasadora de la ley” y “La constitución del sujeto”. Actualmente brinda formación en espacios virtuales y grupos de estudio, residencias de Hospitales y diferentes universidades de Latinoamérica.',
		'Se desempeña como supervisora clínica en el Hospital Eva Perón, Fundación Tiempo y la Universidad de Querétaro. Creadora de Lacan Big Data y autora del libro *Analizar. Guía práctica para una profesión imposible* (2025).',
	],
	'juan augusto laplacette': [
		'Doctor en Psicología y especialista en clínica con niños y adolescentes (UBA), con distinción de Diploma de Honor. Ex becario doctoral del CONICET, ha investigado sobre el juego, la parentalidad y el desarrollo infantil.',
		'Integra la Comisión Directiva de la Sociedad Argentina de Primera Infancia y dicta clases en profesorados del Ministerio de Educación de CABA. Además de su trabajo clínico y académico, es autor e ilustrador de libros dedicados a las infancias, como *Cuidadoso* y *Como si fuera tan fácil*, donde articula saber psicoanalítico, sensibilidad y creatividad gráfica.',
	],
	'viviana estanga': [
		'Psicóloga (UBA), con formación clínica en infancia y adolescencia en el Hospital Durand y posgrados en neuropsicología infantil y envejecimiento cerebral.',
		'Es docente de la cátedra de Psicopatología Infantojuvenil en la Facultad de Psicología (UBA) y dicta diplomaturas en clínica psicoanalítica de la infancia y adolescencia en Raíces. Integra el equipo Haciéndonos con otros y es coautora de libros como *Clínica de lo traumático*, *Psicopatología Infantojuvenil* y *En las aulas ¡Digamos Presente!*.',
		'Se desempeña también como supervisora y psicoterapeuta clínica.',
	],
	'noelia benedetto': [
		'Licenciada en Psicología (UNC). Posgrado en sexología clínica, posgrado en terapia de pareja y posgrado en terapia sexual con perspectiva de género. Residencia Interdisciplinaria en Salud Mental.',
		'Especializanda en Estudios de género con intervención en salud, educación y comunicación, y en Sexología. Docente de la Facultad de Psicología (UNC). Coordinadora y docente del curso de posgrado de Terapia sexual con perspectiva de género (PROSEXO, Aguirre Benedetto consultora). Docente en la Asociación Argentina de Salud Mental. Miembro de FESEA y de AASM.',
	],
	'macarena cao gene': [
		'Psicóloga egresada de la UBA, especialista en clínica con infancias y juventudes. Maestranda en “Infancias y Juventudes” (UADER) y en etapa de tesis en la Especialización en Prevención y Clínica de Niños (UBA). Diplomada en múltiples áreas vinculadas a la niñez, derechos humanos, neurociencias y ciberdelitos, es Fellow en Neuropsiquiatría y Neurología Cognitiva.',
		'Directora de RAÍCES, docente en la UBA y en Fundación Barceló, y coordinadora académica de posgrados y diplomaturas. Ha compilado y coescrito más de quince libros sobre infancias, abuso, violencia y clínica psicoanalítica.',
		'Conferencista nacional e internacional, se destaca por su compromiso con la defensa de los derechos de niñas, niños y adolescentes.',
	],
	'julian porri': [
		'Psicólogo clínico (UBA) y psicoanalista, especializado en afecciones psicosomáticas y tratamiento del dolor.',
		'Coordina el área de Psicología del Equipo de Tratamiento del Dolor en el Hospital Durand y forma parte del cuerpo docente en la Facultad de Psicología (UBA), donde dicta prácticas profesionales y tutorías de tesis. Ha sido docente en la cátedra de Psicosomática y colabora en la formación de profesionales en la Fundación Dolor.',
		'También integra el equipo docente de la Diplomatura en Psicopatología Clínica Infantojuvenil (Raíces).',
	],
	'irina poletti': [
		'Psicóloga (UBA), terapeuta clínica con orientación psicoanalítica y especialista en psicología perinatal. Se ha formado en clínica con niñeces y adolescentes (Centro N.º 1, CABA) y en lactancia materna (Ministerio de Salud).',
		'Se desempeña como supervisora clínica y docente universitaria (UAI), y acompañó procesos de revinculación familiar. Integró el Plan Municipal “Crecer Bien” en primera infancia, donde articuló clínica, políticas públicas y cuidado temprano desde una perspectiva subjetiva.',
	],
	'silvia kargodorian': [
		'Psicóloga y psicoanalista argentina, con práctica clínica en Buenos Aires y trayectoria docente en diversas Universidades. Es miembro activo de la Escuela de Psicoanálisis del Hospital Borda y de la Asociación Argentina de Salud Mental.',
		'Ensayista, escritora y poeta, ha publicado en revistas y libros especializados en psicoanálisis, filosofía y literatura. Es autora y compiladora del libro *Agalma y el efecto sorpresa en las Psicosis* (Vergara, 2021).',
		'Actualmente cursa el doctorado en Filosofía en la UNLa, donde también integra equipos de investigación. Su recorrido cruza clínica, escritura y pensamiento crítico desde una mirada singular sobre la locura, el arte y el lenguaje.',
	],
	'veronica gerstner': [
		'Médica y cardióloga formada en la Universidad Católica de Córdoba y el Hospital Alemán (UBA-SAC), con una extensa trayectoria en medicina psicosomática y psicoanálisis del trauma. Estudió en Alemania, Brasil y Reino Unido, integrando enfoques como la teoría polivagal, la experiencia somática, la terapia sistémica y la Gestalt viva con Claudio Naranjo.',
		'Es directora de los programas Terapia Trifocal del Trauma y Abordaje Integrativo de la Salud (ICFT), y coordina un proyecto de investigación en CLACSO sobre trauma transgeneracional.',
		'Ha capacitado a profesionales de salud en trauma y regulación mente-cuerpo desde 2014, y ha sido expositora en múltiples cumbres internacionales. Su trabajo articula medicina, psicoanálisis y saberes corporales en una práctica clínica y formativa profundamente interdisciplinaria.',
	],
	'lucas vazquez topssian': [
		'Psicólogo clínico y forense, especializado en el tratamiento de adolescentes y adultos. Egresado de la Universidad del Museo Social Argentino, con formación de posgrado en la Institución Fernando Ulloa y una maestría en Psicopatología (UCES, 2024).',
		'Se ha desempeñado como psicólogo en el Poder Judicial de la Nación y en diversas instituciones clínicas y forenses. Fue Director del Departamento de Psicología en la Asociación Argentina de Lucha contra el Cibercrimen (AALCC), donde coordinó intervenciones preventivas en casos de ciberacoso.',
		'Ha publicado en libros sobre ciberbullying y grooming, y participó como contenidista en el programa Seguimos Educando (Canal Encuentro). Su práctica integra el abordaje clínico con una fuerte vocación de divulgación y trabajo interdisciplinario.',
	],
	'daniel camps': [
		'Licenciado en Psicología, con formación de posgrado en Psicoanálisis y Maestría en curso, y miembro en formación de la Asociación Psicoanalítica Argentina.',
		'Se desempeña como docente universitario en las cátedras de Psicoanálisis I y II y Psicología Clínica del Adulto en la Universidad Católica Argentina, con amplia trayectoria en la enseñanza de la teoría freudiana.',
		'Ha desarrollado una sólida labor académica y clínica, articulando investigación, docencia y práctica profesional desde una orientación psicoanalítica. Es autor de publicaciones especializadas y expositor en ámbitos científicos, con especial interés en problemáticas como la angustia, el narcisismo y las inhibiciones del analista.',
	],
	'vanesa carpaneto sueldo': [
		'Psicóloga, magíster en Psicología de la Urgencia y la Emergencia, y diplomada en Psicología del Duelo y en Criminología y Psicología Forense.',
		'Con más de 15 años de experiencia, se especializa en intervenciones en crisis, emergencias psicosociales y procesos de duelo, coordinando grupos de acompañamiento y asistencia en desastres.',
		'Docente en la Universidad Salesiana en la cátedra de Psicología de la Personalidad e integrante de FIPE (Federación Internacional de Psicología de la Emergencia), actualmente cursa un Grand Máster en Intervención Psicológica de Trastornos Psicosomáticos, de la Personalidad y Psicosis.',
	],
	'ester noemi migrabi': [
		'Psicoanalista, egresada de la Universidad de Belgrano en 1980 con especialización en Psicología Clínica. Inició su práctica en hospitales y centros de salud mental de Buenos Aires, y fue docente en la Cátedra de Epistemología Genética en la UBA.',
		'Actualmente combina la clínica con la enseñanza y la participación en jornadas y congresos de psicoanálisis. Es coautora del libro *Las mujeres del Psicoanálisis* (2023) y compiladora de *Entre un hombre y una mujer… desencuentros* (2024).',
		'Miembro de Discurso Freudiano. Escuela de Psicoanálisis, participa en grupos de investigación sobre mujeres analistas y la relación entre surrealismo, arte y psicoanálisis.',
	],
	'yamila coronel': [
		'Licenciada en Psicología (UBA), se especializa en asistencia y prevención de las violencias por razones de género y se encuentra en formación en Psicología de la Emergencia. Es Diplomada en Salud Mental y Derechos Humanos (UNPAZ), en Gestión del Riesgo de Desastres (IUV) y en Acompañamiento Comunitario contra las Violencias de Género (UPC).',
		'Actualmente se desempeña como Directora General de Emergencias en la Secretaría de Desarrollo Social del Municipio de Florencio Varela y, desde 2025, como Secretaria General del Colegio de Psicólogos y Psicólogas del Distrito XII de la Provincia de Buenos Aires.',
		'Fue Directora del Hogar de Protección Integral para Mujeres y Personas LGBTI+ en situación de violencia, capacitadora en Ley Micaela y coordinadora de grupos de apoyo mutuo. Además, integró y coordinó comisiones de Psicología de la Emergencia y de Género y Diversidades, y cursa la Tecnicatura en Emergencias Sanitarias y Desastres (UNAJ).',
	],
	'alejandra giudice': [
		'Mtr. en Gestión de Sistemas de Salud (UF). Lic. en Psicología (UBA). Profesora de Psicología (UBA). Diplomada en Sexología (AASM), Especialización en Psicología clínica, laboral y forense (UBA), Diplomatura en diseños y proyectos para Personas con Discapacidad (UI) y Diplomatura en Psicología Institucional (UBA).',
		'Directora en Hogar y centro de día para personas con discapacidad. Profesora de Psiquiatría y Salud Mental (Facultad de Medicina) y de Didáctica de la Psicología (Facultad de Psicología). Atención clínica individual, familias y parejas.',
		'Integrante del Capítulo de Sexología Positiva y Salud Mental de AASM. Participación en congresos APSA y AASM.',
	],
	'sebastian mosquera': [
		'Licenciado en Psicología por la UBA y especialista en psicoterapia cognitiva. Terapeuta certificado en el Método Gottman y formado en Terapia Focalizada en las Emociones (EFT). Trabajo clínico con adultos y parejas.',
		'Docente y supervisor clínico, y co-director de Dupla, equipo especializado en terapia de pareja. Formación avanzada en psicopatología cognitiva, psicotrauma y técnicas psicoterapéuticas basadas en la evidencia.',
		'Su enfoque integra TCC de segunda y tercera ola con modelos contemporáneos de interacción vincular, con especial énfasis en procesos emocionales y comunicación relacional.',
	],
};

/** Retorna la persona con su bio de docs si existe (si no, queda sin bio). */
function conBio(nombre: string, titulo?: string): PersonaPlantel {
	const bio = bios[normalizarNombre(nombre)];
	return bio ? { nombre, titulo, bio } : { nombre, titulo };
}

/* Orden de render: documentado en docs/docentes.md; primero quienes tienen
 * bio, al final los que todavía no (extras del plantel previo). */

export const directores: PersonaPlantel[] = [
	conBio('Lic. Gabriela Artaza Toro', 'Directora Académica'),
	conBio('Lic. Diego Núñez', 'Director Académico'),
];

export const docentes: PersonaPlantel[] = [
	conBio('Dra. Marta Gerez Ambertín', 'Docente'),
	conBio('Lic. Juan Manuel Martínez', 'Docente'),
	conBio('Lic. Lara Lizenberg', 'Docente'),
	conBio('Lic. Juan Augusto Laplacette', 'Docente'),
	conBio('Lic. Viviana Estanga', 'Docente'),
	conBio('Lic. Noelia Benedetto', 'Docente'),
	conBio('Lic. Macarena Cao Gené', 'Docente'),
	conBio('Lic. Julián Porri', 'Docente'),
	conBio('Lic. Irina Poletti', 'Docente'),
	conBio('Lic. Silvia Kargodorian', 'Docente'),
	conBio('Dra. Verónica Gerstner', 'Docente'),
	conBio('Lic. Lucas Vázquez Topssian', 'Docente'),
	conBio('Lic. Daniel Camps', 'Docente'),
	conBio('Lic. Vanesa Carpaneto Sueldo', 'Docente'),
	conBio('Lic. Ester Noemí Migrabi', 'Docente'),
	conBio('Lic. Yamila Coronel', 'Docente'),
	conBio('Lic. Alejandra Giudice', 'Docente'),
	conBio('Lic. Sebastián Mosquera', 'Docente'),
	conBio('Lic. Pía Martina', 'Docente'),
	/* Extras del plantel previo (sin bio todavía en docs) */
	conBio('Lic. Fabiana Tomei', 'Docente'),
	conBio('Lic. José Joaquín Valderrama', 'Docente'),
	conBio('Lic. Gisela Manero', 'Docente'),
];