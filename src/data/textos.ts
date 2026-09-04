/**
 * Textos — inventario consolidado de todos los textos del sitio, para la
 * página /textos.
 *
 * Cómo se alimenta:
 *  - Las páginas que viven en el sistema de bloques (facultad, plantel,
 *    biblioteca y cada formación) se derivan automáticamente de sus fuentes
 *    de datos, con bloquesAItems(). Cero duplicación: si cambia el dato,
 *    cambia el inventario.
 *  - Las páginas cuyo texto está escrito inline en el .astro (home y las
 *    legales) se declaran aquí como items { etiqueta, texto }, en texto
 *    plano y siguiendo el orden de aparición.
 */
import { facultadSecciones } from './facultad';
import { plantelSecciones } from './plantel';
import { bibliotecaSecciones } from './biblioteca';
import { formaciones } from './formaciones';
import { bloquesAItems } from './inventario';
import type { ItemInventario, PaginaInventario } from './inventario';

/** Construye la entrada de una formación: header (h1 + metas) + secciones. */
function formacionPagina(f: (typeof formaciones)[number]): PaginaInventario {
	const secciones: ItemInventario[] = [];
	secciones.push({ etiqueta: 'h1', texto: f.titulo });
	if (f.categoria) secciones.push({ etiqueta: 'p (categoría)', texto: f.categoria });
	if (f.kicker) secciones.push({ etiqueta: 'p (kicker)', texto: f.kicker });
	if (f.descripcion) secciones.push({ etiqueta: 'p (bajada)', texto: f.descripcion });
	if (f.duracion) secciones.push({ etiqueta: 'p (duración)', texto: f.duracion });
	if (f.modalidad) secciones.push({ etiqueta: 'p (modalidad)', texto: f.modalidad });
	if (f.dirigidoA) secciones.push({ etiqueta: 'p (dirigido a)', texto: f.dirigidoA });
	bloquesAItems(f.secciones, secciones);
	return { ruta: `/${f.slug}/`, titulo: f.titulo, secciones };
}

export const textos: PaginaInventario[] = [
	/* ================================================================== */
	/* Home                                                               */
	/* ================================================================== */
	{
		ruta: '/',
		titulo: 'Facultad Internacional de Psicología y Psicoanálisis Lalangue',
		secciones: [
			{ etiqueta: 'p (kicker)', texto: 'Institución académica francesa · formación clínica y psicoanálisis' },
			{ etiqueta: 'h1', texto: 'Facultad Internacional de Psicología y Psicoanálisis Lalangue' },
			{
				etiqueta: 'p',
				texto: 'Institución académica francesa dedicada a la formación clínica y al desarrollo del pensamiento contemporáneo en psicología y psicoanálisis. Extensión hispanohablante de la E-Faculté de Psychologie et Psychanalyse (EFPP – Francia), con más de 25 años de trayectoria en la formación clínica y en la transmisión del psicoanálisis en Europa. Una clínica rigurosa, ética, internacional y plural, para toda la comunidad hispanohablante global.',
			},
			{ etiqueta: 'a (cta)', texto: 'Explorar formaciones' },
			{ etiqueta: 'a (cta)', texto: 'Conocé Lalangue' },

			{ etiqueta: 'p (kicker)', texto: 'Identidad' },
			{ etiqueta: 'h2', texto: 'Una formación clínica francesa, con alcance global' },
			{
				etiqueta: 'p',
				texto: 'Lalangue es una institución académica francesa dedicada a la formación clínica y al desarrollo del pensamiento contemporáneo en psicología y psicoanálisis.',
			},
			{
				etiqueta: 'p',
				texto: 'Constituye la extensión hispanohablante de la E-Faculté de Psychologie et Psychanalyse (EFPP – Francia), con más de 25 años de trayectoria en formación clínica y transmisión del psicoanálisis en Europa. Está reconocida como organismo de formación profesionalizante por la DREETS (Dirección regional de economía, empleo, trabajo y solidaridades — Gobierno Francés), dentro del régimen francés de formación profesional continua.',
			},
			{
				etiqueta: 'p',
				texto: 'Nuestra actividad académica cuenta con el aval de instituciones europeas del campo clínico y educativo.',
			},
			{ etiqueta: 'p (card)', texto: 'Avales europeos' },
			{ etiqueta: 'li', texto: 'APE — Asociación de Psicoanalistas Europeos' },
			{ etiqueta: 'li', texto: 'FEDE — Federación Europea de Escuelas' },
			{
				etiqueta: 'blockquote',
				texto: 'Desarrollamos programas formativos dirigidos a la comunidad hispanohablante global, promoviendo una clínica rigurosa, ética, internacional y plural.',
			},

			{ etiqueta: 'p (kicker)', texto: 'Visión' },
			{ etiqueta: 'h2', texto: 'El modelo educativo francés, en diálogo con la clínica contemporánea' },
			{
				etiqueta: 'p',
				texto: 'Desde su origen, el proyecto académico se ha orientado a construir un espacio de formación global que articule el modelo educativo francés con las realidades clínicas contemporáneas del mundo hispanohablante, impulsando nuevos formatos que prioricen el acceso del deseo vocacional a la calidad educativa.',
			},
			{
				etiqueta: 'p',
				texto: 'Bajo esta inspiración, Lalangue propone el estudio riguroso de diversos modelos teóricos de la psicología moderna, integrando aportes de las ciencias y favoreciendo el diálogo entre las diversas corrientes de la psicoterapia.',
			},
			{ etiqueta: 'p (sub)', texto: 'Problemáticas de la subjetividad contemporánea' },
			{ etiqueta: 'li', texto: 'Transformaciones en los vínculos sociales' },
			{ etiqueta: 'li', texto: 'Impacto de los entornos digitales en la subjetividad' },
			{ etiqueta: 'li', texto: 'Nuevas configuraciones del deseo y del goce' },
			{ etiqueta: 'li', texto: 'Dinámicas familiares contemporáneas' },
			{ etiqueta: 'li', texto: 'Procesos psicopatológicos emergentes' },

			{ etiqueta: 'p (kicker)', texto: 'Modelo' },
			{ etiqueta: 'h2', texto: 'Formaciones profesionalizantes bajo el régimen francés' },
			{
				etiqueta: 'p',
				texto: 'La propuesta formativa de Lalangue se estructura bajo el régimen francés de formaciones profesionalizantes ( formations professionnalisantes ). El modelo pedagógico articula tres pilares.',
			},
			{ etiqueta: 'h4', texto: 'Formación teórica sistemática' },
			{ etiqueta: 'p', texto: 'Estudio riguroso de diversos modelos teóricos de la psicología moderna, integrando aportes de las ciencias.' },
			{ etiqueta: 'h4', texto: 'Práctica clínica supervisada' },
			{ etiqueta: 'p', texto: 'Acompañamiento de casos clínicos bajo la orientación de docentes con experiencia.' },
			{ etiqueta: 'h4', texto: 'Salida laboral internacional' },
			{ etiqueta: 'p', texto: 'Inserción profesional mediante redes clínicas internacionales y plataformas de consulta online.' },
			{
				etiqueta: 'blockquote',
				texto: 'Sostener el desarrollo de profesionales capaces de osar una práctica clínica ética y rigurosa, en diálogo con los desafíos contemporáneos y en comunidad.',
			},

			{ etiqueta: 'p (kicker)', texto: 'Comunidad' },
			{ etiqueta: 'h2', texto: 'Una comunidad internacional de más de 15 países' },
			{
				etiqueta: 'p',
				texto: 'Lalangue reúne a docentes, estudiantes y profesionales de Europa y América Latina, promoviendo el intercambio plural como fuente de nuevos espacios académicos.',
			},
			{ etiqueta: 'h4', texto: 'Supervisiones clínicas grupales' },
			{ etiqueta: 'p', texto: 'Acompañamiento de casos clínicos para profesionales y estudiantes bajo la orientación de docentes con experiencia.' },
			{ etiqueta: 'h4', texto: 'Aulas Libres' },
			{ etiqueta: 'p', texto: 'Talleres abiertos a la comunidad sobre contenidos de interés general desde la perspectiva de nuestros docentes.' },
			{ etiqueta: 'h4', texto: 'Jornadas Internacionales' },
			{ etiqueta: 'p', texto: 'Congresos académicos especializados vinculados a la psicología, el psicoanálisis y las ciencias humanas.' },
			{ etiqueta: 'h4', texto: 'Grupos de Estudio' },
			{ etiqueta: 'p', texto: 'Seminarios de trabajo teórico coordinados por docentes para profundizar la lectura de textos fundamentales.' },
			{ etiqueta: 'p', texto: 'En los últimos meses, estas actividades han convocado a más de 30.000 participantes en nuestros eventos online.' },

			{ etiqueta: 'p (kicker)', texto: 'Clínica' },
			{ etiqueta: 'h2', texto: 'Inserción profesional y redes clínicas internacionales' },
			{
				etiqueta: 'p',
				texto: 'Lalangue promueve la inserción profesional de sus estudiantes mediante la participación en redes clínicas internacionales y plataformas de consulta online.',
			},
			{ etiqueta: 'li', texto: 'Colaboración con plataformas internacionales de psicoterapia' },
			{ etiqueta: 'li', texto: 'Participación en directorios profesionales' },
			{ etiqueta: 'li', texto: 'Desarrollo de redes clínicas supervisadas' },
			{ etiqueta: 'p (card)', texto: 'Supervisiones Clínicas Lalangue' },

			{ etiqueta: 'p (kicker)', texto: 'Formaciones' },
			{ etiqueta: 'h2', texto: 'Diplomados Internacionales especializados' },
			{
				etiqueta: 'p',
				texto: 'El cuerpo docente de Lalangue está integrado por profesionales con trayectoria académica y clínica en universidades, centros de formación y asociaciones profesionales de diversos marcos teóricos del campo de la psicología y del psicoanálisis.',
			},
			{ etiqueta: 'p (sub)', texto: 'Áreas de especialización' },
			{ etiqueta: 'li', texto: 'Psicopatología Infanto-Juvenil' },
			{ etiqueta: 'li', texto: 'Subjetividad Digital' },
			{ etiqueta: 'li', texto: 'Terapia de Parejas y Erotismo Relacional' },
			{ etiqueta: 'li', texto: 'Abordaje del Ataque de Pánico' },
			{ etiqueta: 'li', texto: 'Terapias Breves' },
			{ etiqueta: 'h3', texto: 'Diplomado Internacional en Psicoterapia con Enfoque Psicoanalítico Lalangue' },
			{ etiqueta: 'p', texto: 'Formación orientada al desarrollo de competencias clínicas para el acompañamiento terapéutico.' },
			{ etiqueta: 'li', texto: 'Duración: 2 años (72 clases)' },
			{ etiqueta: 'li', texto: 'Modalidad: 100% online con clases grabadas y encuentros sincrónicos' },
			{ etiqueta: 'p (sub)', texto: 'Incluye' },
			{ etiqueta: 'li', texto: 'Supervisión clínica grupal' },
			{ etiqueta: 'li', texto: 'Participación en espacios comunitarios' },
			{ etiqueta: 'li', texto: 'Acceso a directorios profesionales internacionales' },
			{ etiqueta: 'li', texto: 'Certificación europea bajo régimen francés de formación profesionalizante' },
			{ etiqueta: 'h3', texto: 'Máster Internacional en Psicoanálisis Aplicado Lalangue' },
			{ etiqueta: 'p', texto: 'Formación avanzada orientada al desarrollo de competencias clínicas para el acompañamiento terapéutico.' },
			{ etiqueta: 'li', texto: 'Duración: 2 años (144 clases)' },
			{ etiqueta: 'li', texto: 'Modalidad: 100% online con clases grabadas y encuentros sincrónicos' },
			{ etiqueta: 'p (sub)', texto: 'Incluye' },
			{ etiqueta: 'li', texto: 'Supervisión clínica grupal' },
			{ etiqueta: 'li', texto: 'Participación en espacios comunitarios' },
			{ etiqueta: 'li', texto: 'Acceso a directorios profesionales internacionales' },
			{ etiqueta: 'li', texto: 'Certificación europea bajo régimen francés de formación profesionalizante' },

			{ etiqueta: 'p (kicker)', texto: 'Cierre' },
			{ etiqueta: 'h2', texto: 'Tender puentes' },
			{
				etiqueta: 'p',
				texto: 'Lalangue busca contribuir al desarrollo del pensamiento clínico contemporáneo que aborde los desafíos culturales, sociales y tecnológicos de nuestro tiempo, estableciendo la formación clínica como un proceso que combina:',
			},
			{ etiqueta: 'li', texto: 'Estudio teórico riguroso' },
			{ etiqueta: 'li', texto: 'Práctica clínica supervisada' },
			{ etiqueta: 'li', texto: 'Trabajo colectivo en una comunidad académica internacional' },
			{
				etiqueta: 'p',
				texto: 'Escuchando las inquietudes de la época, optando por desempeñar un papel protagónico en una era profundamente tecnificada e individualizada, para tender puentes.',
			},

			/* ── Secciones marcadas BORRADOR (copiadas de la web actual) ── */
			{ etiqueta: 'p (borrador)', texto: 'Borrador — secciones copiadas de la web actual' },
			{ etiqueta: 'p (kicker)', texto: 'Últimas Novedades' },
			{ etiqueta: 'h2', texto: 'Lo que está pasando en la comunidad' },
			{ etiqueta: 'span', texto: 'Comunidad de WhatsApp' },
			{ etiqueta: 'h4', texto: 'Únete a nuestra comunidad' },
			{ etiqueta: 'p', texto: 'Accedé al nuevo grupo de WhatsApp de Facultad Lalangue. Noticias, eventos y oportunidades de formación en psicoanálisis y psicoterapia.' },
			{ etiqueta: 'a (cta)', texto: 'Súmate aquí →' },
			{ etiqueta: 'span', texto: 'Becas en psicoanálisis y psicoterapia' },
			{ etiqueta: 'h4', texto: 'Solicitá información sobre becas' },
			{ etiqueta: 'p', texto: 'Accedé a orientación personalizada para conocer los requisitos, disponibilidad y beneficios de nuestras becas. Un asesor te guiará paso a paso para que puedas postular sin vueltas.' },
			{ etiqueta: 'a (cta)', texto: 'Quiero información →' },

			{ etiqueta: 'p (kicker)', texto: 'efpp' },
			{ etiqueta: 'h2', texto: 'Más de 20 años de Excelencia en Psicoterapia y Psicoanálisis' },
			{
				etiqueta: 'p',
				texto: 'La Facultad Internacional de Psicología y Psicoanálisis Lalangue abre sus puertas e invita a los estudiantes hispanoparlantes, expandiendo su prestigiosa formación en psicoterapia y psicoanálisis a nuevas fronteras.',
			},
			{ etiqueta: 'h4', texto: 'Formaciones Flexibles' },
			{ etiqueta: 'p', texto: 'Estudia desde cualquier lugar con programas adaptados a tu ritmo.' },
			{ etiqueta: 'h4', texto: 'Docentes de Renombre' },
			{ etiqueta: 'p', texto: 'Expertos con una sólida trayectoria en sus respectivas disciplinas.' },
			{ etiqueta: 'h4', texto: 'Certificación Internacional' },
			{ etiqueta: 'p', texto: 'Obtén una titulación reconocida con respaldo académico de excelencia.' },
			{ etiqueta: 'h4', texto: 'Pasantías Rentadas' },
			{ etiqueta: 'p', texto: 'Aplicá conocimientos en entornos clínicos supervisados desde el primer año.' },

			{ etiqueta: 'p (kicker)', texto: 'Nuestra Filosofía' },
			{ etiqueta: 'h2', texto: 'Enfoque de Enseñanza Único' },
			{ etiqueta: 'h4', texto: 'Excelencia y Flexibilidad' },
			{
				etiqueta: 'p',
				texto: 'En FIPP Lalangue combinamos excelencia académica con flexibilidad para ofrecer formaciones certificadas en psicoterapia y psicoanálisis. Todos nuestros programas están disponibles en modalidad online, adaptándose a las necesidades de cada estudiante. Además, ofrecemos una experiencia única con pasantías rentadas.',
			},
			{ etiqueta: 'h4', texto: 'Formadores Expertos y Reconocidos' },
			{
				etiqueta: 'p',
				texto: 'Nuestros formadores, expertos en su campo, brindan seguimiento personalizado, guiando el desarrollo académico y profesional de los estudiantes. Con un enfoque interdisciplinario y ético, promovemos una enseñanza innovadora que responde a las demandas actuales del psicoanálisis.',
			},

			{ etiqueta: 'p (kicker)', texto: 'Por qué elegirnos' },
			{ etiqueta: 'h2', texto: '¿Por qué elegir nuestros programas de formación?' },
			{ etiqueta: 'h4', texto: 'Excelencia Académica' },
			{
				etiqueta: 'p',
				texto: 'Tanto nuestros fundadores como el plantel académico son expertos de reconocido prestigio, con una sólida trayectoria en psicoterapia y psicoanálisis. Se destacan por su capacidad de transmitir conocimientos de manera clara y accesible, sin comprometer la profundidad académica.',
			},
			{ etiqueta: 'h4', texto: 'Práctica desde el primer año' },
			{
				etiqueta: 'p',
				texto: 'Nuestro programa de pasantías rentadas permite a los estudiantes aplicar sus conocimientos teóricos en entornos clínicos supervisados, adquiriendo experiencia profesional desde el primer año y garantizando una formación práctica y completa.',
			},

			{ etiqueta: 'p (kicker)', texto: 'Programas' },
			{ etiqueta: 'h2', texto: 'Programas de Formación Certificada' },
			{
				etiqueta: 'p',
				texto: 'Descubrí nuestros programas de formación psicoanalítica online certificados, basados en el pensamiento de Freud y Lacan. Estudiá con docentes internacionales y obtené tu titulación desde cualquier lugar del mundo.',
			},
			{ etiqueta: 'h4', texto: 'Diplomatura en Psicoterapia Psicoanalítica' },
			{ etiqueta: 'p', texto: 'Formación orientada al desarrollo de competencias clínicas para el acompañamiento terapéutico.' },
			{ etiqueta: 'a (cta)', texto: 'Conocé más →' },
			{ etiqueta: 'h4', texto: 'Máster en Psicoanálisis' },
			{ etiqueta: 'p', texto: 'Programa avanzado basado en el pensamiento de Freud y Lacan, con docentes internacionales y titulación desde cualquier lugar del mundo.' },
			{ etiqueta: 'a (cta)', texto: 'Conocé más →' },
			{ etiqueta: 'h4', texto: 'Pasantías Rentadas' },
			{ etiqueta: 'p', texto: 'Aplicá tus conocimientos teóricos en entornos clínicos supervisados desde el primer año.' },
			{ etiqueta: 'a (cta)', texto: 'Conocé más →' },
		],
	},

	/* ================================================================== */
	/* Facultad (derivada)                                                 */
	/* ================================================================== */
	{
		ruta: '/facultad/',
		titulo: 'Facultad Internacional de Psicología y Psicoanálisis Lalangue',
		secciones: bloquesAItems(facultadSecciones),
	},

	/* ================================================================== */
	/* Plantel académico (derivada)                                        */
	/* ================================================================== */
	{
		ruta: '/plantel-academico/',
		titulo: 'Plantel Académico',
		secciones: bloquesAItems(plantelSecciones),
	},

	/* ================================================================== */
	/* Biblioteca (derivada)                                               */
	/* ================================================================== */
	{
		ruta: '/nuestra-biblioteca/',
		titulo: 'Psicosis y sus vertientes',
		secciones: bloquesAItems(bibliotecaSecciones),
	},

	/* ================================================================== */
	/* Formaciones (derivadas)                                             */
	/* ================================================================== */
	...formaciones.map(formacionPagina),

	/* ================================================================== */
	/* Aviso Legal (manual)                                                */
	/* ================================================================== */
	{
		ruta: '/aviso-legal/',
		titulo: 'Aviso Legal',
		secciones: [
			{ etiqueta: 'p (kicker)', texto: 'Legal' },
			{ etiqueta: 'h1', texto: 'Aviso Legal' },
			{
				etiqueta: 'p',
				texto: 'En Facultad Internacional de Psicología y Psicoanálisis Lalangue (representada legalmente por International Association for Wellbeing, SIREN 942604794), nos comprometemos a proteger la privacidad y la seguridad de nuestros usuarios y visitantes de nuestro sitio web www.facultadlalangue.com.',
			},
			{ etiqueta: 'h2', texto: 'Información general' },
			{
				etiqueta: 'p',
				texto: 'En cumplimiento con el artículo 6 de la Ley francesa n° 2004-575 de 21 de junio de 2004 para la confianza en la economía digital (Loi pour la Confiance dans l\'Économie Numérique), se informa a los usuarios del sitio www.facultadlalangue.com los siguientes datos:',
			},
			{ etiqueta: 'li', texto: 'Titular del sitio web: International Association for Wellbeing' },
			{ etiqueta: 'li', texto: 'Forma jurídica: Asociación (Association)' },
			{ etiqueta: 'li', texto: 'SIREN: 942604794' },
			{ etiqueta: 'li', texto: 'Dirección postal: 11 Rue des Comtes Léotardi, 06500 Saint-Agnès, Francia' },
			{ etiqueta: 'li', texto: 'Email de contacto: info@facultadlalangue.online' },
			{ etiqueta: 'li', texto: 'Proveedor de alojamiento web: Hostinger' },
			{ etiqueta: 'h2', texto: 'Propiedad intelectual' },
			{
				etiqueta: 'p',
				texto: 'Todos los contenidos presentes en este sitio (textos, imágenes, gráficos, logos, videos, documentos descargables, software, etc.) son propiedad exclusiva de International Association for Wellbeing o se utilizan con autorización.',
			},
			{
				etiqueta: 'p',
				texto: 'Toda reproducción, representación, modificación, publicación, adaptación de la totalidad o parte de los elementos del sitio, sea cual sea el medio o procedimiento utilizado, está prohibida, salvo autorización previa por escrito.',
			},
			{ etiqueta: 'h2', texto: 'Responsabilidad' },
			{ etiqueta: 'p', texto: 'El titular del sitio se esfuerza por ofrecer información precisa y actualizada. Sin embargo, no se hace responsable de errores u omisiones, ni de los resultados que pudieran derivarse del uso de dicha información.' },
			{ etiqueta: 'p', texto: 'El usuario es responsable del uso adecuado del sitio web y de los contenidos que pueda descargar.' },
			{ etiqueta: 'h2', texto: 'Enlaces externos' },
			{ etiqueta: 'p', texto: 'El sitio puede contener enlaces hacia otros sitios web sobre los cuales Facultadlalangue.com no tiene control. No se asume ninguna responsabilidad respecto al contenido, funcionamiento o accesibilidad de estos sitios externos.' },
			{ etiqueta: 'h2', texto: 'Legislación aplicable y jurisdicción' },
			{ etiqueta: 'p', texto: 'El presente aviso legal se rige por la legislación francesa. Cualquier controversia relacionada con el uso del sitio web será competencia exclusiva de los tribunales de Niza, Francia.' },
			{ etiqueta: 'h2', texto: 'Política de Compra, Devoluciones, Reembolsos, Pagos, Seguridad y Garantía' },
			{ etiqueta: 'h3', texto: 'Proceso de compra' },
			{ etiqueta: 'p', texto: 'La inscripción a cursos, talleres, programas de formación o membresías ofrecidos en www.facultadlalangue.com se realiza directamente a través del sitio, siguiendo el procedimiento de compra y pago seguro. El usuario recibirá un correo de confirmación una vez validado su pago.' },
			{ etiqueta: 'h3', texto: 'Formas de pago' },
			{ etiqueta: 'p', texto: 'Aceptamos pagos mediante:' },
			{ etiqueta: 'li', texto: 'Tarjetas de crédito/débito (Visa, Mastercard, American Express)' },
			{ etiqueta: 'li', texto: 'Plataformas de pago seguras (Stripe, PayPal u otras habilitadas)' },
			{ etiqueta: 'p', texto: 'Todos los pagos se procesan de manera segura y cifrada para proteger sus datos financieros.' },
			{ etiqueta: 'h3', texto: 'Derecho de desistimiento' },
			{ etiqueta: 'p', texto: 'El usuario dispone de un plazo de 14 días naturales desde la fecha de compra para ejercer su derecho de desistimiento, conforme al Código de Consumo francés (art. L221-18).' },
			{ etiqueta: 'p', texto: 'No obstante, una vez accedido al contenido digital o iniciada la formación, el usuario pierde su derecho de desistimiento, conforme a las excepciones previstas en el artículo L221-28. Al inscribirse y acceder al contenido formativo, el usuario reconoce expresamente haber solicitado el inicio inmediato del servicio digital, con pleno conocimiento de que esto implica la pérdida de su derecho de desistimiento.' },
			{ etiqueta: 'h3', texto: 'Política de devoluciones y reembolsos' },
			{ etiqueta: 'p', texto: 'Cualquier solicitud de baja o revisión será tratada mediante el procedimiento administrativo interno de la Facultad, sin perjuicio de los derechos previstos en la legislación francesa. Dicho procedimiento no implica aceptación automática de reembolso.' },
			{ etiqueta: 'p', texto: 'Si aplica el derecho de desistimiento dentro de los 14 días y el acceso al contenido no ha sido iniciado, se reembolsará el importe íntegro mediante el mismo método de pago utilizado.' },
			{ etiqueta: 'p', texto: 'La Facultad conservará registro electrónico de las inscripciones, comunicaciones y accesos al campus virtual como prueba del inicio efectivo del servicio y de la aceptación de las presentes condiciones. No se realizarán reembolsos una vez iniciado el acceso al contenido digital o cuando la formación haya comenzado.' },
			{ etiqueta: 'p', texto: 'Para solicitar la cancelación o devolución, deberá enviar un correo a info@facultadlalangue.online indicando su nombre completo, fecha de inscripción y curso/membresía adquirido.' },
			{ etiqueta: 'h3', texto: 'Seguridad en el pago' },
			{ etiqueta: 'p', texto: 'Los pagos se realizan de manera segura a través de las plataformas indicadas en el sitio. Utilizamos plataformas de pago que garantizan la seguridad mediante cifrado SSL. Sus datos de pago nunca se almacenan en nuestros servidores.' },
			{ etiqueta: 'h3', texto: 'Garantía académica' },
			{ etiqueta: 'p', texto: 'La Facultad se reserva el derecho de realizar las modificaciones necesarias en la organización académica, el calendario o la composición del cuerpo docente, sin que ello constituya una modificación sustancial del servicio prestado ni dé derecho a reembolso. Los contenidos pedagógicos esenciales y los objetivos formativos permanecen garantizados.' },
			{ etiqueta: 'p', texto: 'Los cursos y formaciones ofrecidos en www.facultadlalangue.com están diseñados para proporcionar una formación académica, basada en estándares éticos y profesionales.' },
			{ etiqueta: 'p', texto: 'Las formaciones impartidas habilitan para el ejercicio profesional dentro del territorio francés, en el marco de la legislación vigente.' },
			{ etiqueta: 'p', texto: 'Cada alumno es responsable de verificar la validez, reconocimiento o habilitación profesional de los títulos o certificaciones obtenidos en su propio país o región.' },
			{ etiqueta: 'p', texto: 'Asimismo, no garantizamos resultados específicos, ya que el éxito en la práctica profesional depende del esfuerzo individual, el compromiso personal, el contexto jurídico local y las circunstancias particulares de cada alumno.' },
			{ etiqueta: 'h3', texto: 'Modificación de las condiciones de venta' },
			{ etiqueta: 'p', texto: 'Nos reservamos el derecho de modificar estas condiciones en cualquier momento. Las nuevas condiciones estarán disponibles en el sitio web y serán aplicables a las nuevas contrataciones.' },
		],
	},

	/* ================================================================== */
	/* Política de Privacidad (manual)                                     */
	/* ================================================================== */
	{
		ruta: '/politica-de-privacidad/',
		titulo: 'Política de Privacidad',
		secciones: [
			{ etiqueta: 'p (kicker)', texto: 'Privacidad' },
			{ etiqueta: 'h1', texto: 'Política de Privacidad' },
			{ etiqueta: 'p (actualización)', texto: 'Última actualización: 27 de mayo de 2025' },
			{ etiqueta: 'h2', texto: 'Introducción' },
			{ etiqueta: 'p', texto: 'En Facultad Internacional de Psicología y Psicoanálisis Lalangue (representada legalmente por International Association for Wellbeing, SIREN 942604794), nos comprometemos a proteger la privacidad y la seguridad de nuestros usuarios y visitantes de nuestro sitio web www.facultadlalangue.com.' },
			{ etiqueta: 'p', texto: 'Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales, en conformidad con el Reglamento General de Protección de Datos (UE 2016/679 – RGPD) y la Ley francesa Informatique et Libertés.' },
			{ etiqueta: 'p', texto: 'Al utilizar nuestro sitio web, usted acepta las prácticas descritas en esta política.' },
			{ etiqueta: 'h2', texto: 'Información que recopilamos' },
			{ etiqueta: 'p', texto: 'Podemos recopilar la siguiente información:' },
			{ etiqueta: 'li', texto: 'Información proporcionada directamente por usted: Nombre, correo electrónico, dirección, número de teléfono, datos de facturación y pago, y cualquier otra información proporcionada voluntariamente a través de formularios o inscripciones.' },
			{ etiqueta: 'li', texto: 'Información recopilada automáticamente: Dirección IP, tipo de navegador, páginas visitadas, tiempos de acceso y otros datos técnicos mediante cookies y tecnologías similares.' },
			{ etiqueta: 'h2', texto: 'Uso de la información' },
			{ etiqueta: 'p', texto: 'La información recopilada puede ser utilizada para:' },
			{ etiqueta: 'li', texto: 'Procesar su registro e inscripciones a cursos o actividades.' },
			{ etiqueta: 'li', texto: 'Comunicarnos con usted en relación con servicios, eventos o actividades académicas.' },
			{ etiqueta: 'li', texto: 'Mejorar la funcionalidad y la experiencia del usuario en el sitio web.' },
			{ etiqueta: 'li', texto: 'Cumplir obligaciones legales y reglamentarias.' },
			{ etiqueta: 'h2', texto: 'Compartición de información' },
			{ etiqueta: 'p', texto: 'No vendemos ni alquilamos sus datos personales. Sin embargo, podemos compartir su información con:' },
			{ etiqueta: 'li', texto: 'Proveedores de servicios (p. ej., procesamiento de pagos, alojamiento web) bajo contratos que respetan la confidencialidad y protección de datos.' },
			{ etiqueta: 'li', texto: 'Autoridades públicas si estamos obligados a hacerlo para cumplir obligaciones legales o defender nuestros derechos.' },
			{ etiqueta: 'h2', texto: 'Protección de su información' },
			{ etiqueta: 'p', texto: 'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos contra accesos no autorizados, alteraciones, divulgación o destrucción.' },
			{ etiqueta: 'h2', texto: 'Derechos del usuario' },
			{ etiqueta: 'p', texto: 'De acuerdo con el RGPD, usted tiene los siguientes derechos:' },
			{ etiqueta: 'li', texto: 'Acceso a sus datos personales.' },
			{ etiqueta: 'li', texto: 'Rectificación de datos inexactos o incompletos.' },
			{ etiqueta: 'li', texto: 'Supresión (derecho al olvido) de sus datos personales.' },
			{ etiqueta: 'li', texto: 'Oposición al tratamiento de sus datos.' },
			{ etiqueta: 'li', texto: 'Limitación del tratamiento en determinadas circunstancias.' },
			{ etiqueta: 'li', texto: 'Portabilidad de sus datos a otro responsable de tratamiento.' },
			{ etiqueta: 'p', texto: 'Puede ejercer sus derechos contactándonos a través de info@facultadlalangue.com.' },
			{ etiqueta: 'h2', texto: 'Retención de datos' },
			{ etiqueta: 'p', texto: 'Conservaremos su información personal solo durante el tiempo necesario para cumplir los fines para los cuales la recopilamos o para cumplir con obligaciones legales.' },
			{ etiqueta: 'h2', texto: 'Cookies' },
			{ etiqueta: 'p', texto: 'Nuestro sitio utiliza cookies para mejorar la experiencia de usuario. Puede configurar su navegador para rechazar cookies o ser informado cuando se envíen. Para más información, consulte nuestra Política de Cookies.' },
			{ etiqueta: 'h2', texto: 'Enlaces a sitios externos' },
			{ etiqueta: 'p', texto: 'Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de esos sitios externos.' },
			{ etiqueta: 'h2', texto: 'Modificaciones de esta política' },
			{ etiqueta: 'p', texto: 'Podemos actualizar esta Política de Privacidad periódicamente. Publicaremos los cambios en esta página y actualizaremos la fecha de modificación.' },
			{ etiqueta: 'h2', texto: 'Contacto' },
			{ etiqueta: 'p', texto: 'Para cualquier consulta relacionada con esta Política de Privacidad o para ejercer sus derechos, puede contactarnos a:' },
			{ etiqueta: 'li', texto: 'International Association for Wellbeing' },
			{ etiqueta: 'li', texto: '11 Rue des Comtes Léotardi, 06500 Saint-Agnès, Francia' },
			{ etiqueta: 'li', texto: 'Email: info@facultadlalangue.com' },
		],
	},

	/* ================================================================== */
	/* Términos y Condiciones (manual)                                     */
	/* ================================================================== */
	{
		ruta: '/terminos-y-condiciones/',
		titulo: 'Términos y Condiciones',
		secciones: [
			{ etiqueta: 'p (kicker)', texto: 'Legal' },
			{ etiqueta: 'h1', texto: 'Términos y Condiciones' },
			{ etiqueta: 'p (actualización)', texto: 'Última actualización: 27 de mayo de 2025' },
			{ etiqueta: 'p', texto: 'En Facultad Internacional de Psicología y Psicoanálisis Lalangue (representada legalmente por International Association for Wellbeing, SIREN 942604794), nos comprometemos a proteger la privacidad y la seguridad de nuestros usuarios y visitantes de nuestro sitio web www.facultadlalangue.com.' },
			{ etiqueta: 'h2', texto: '1. Identificación del responsable' },
			{ etiqueta: 'p', texto: 'El presente sitio web www.facultadlalangue.com es propiedad de la International Association for Wellbeing, inscrita en Francia bajo el número SIREN 942604794, con domicilio social en 11 Rue des Comtes Léotardi, 06500 Saint-Agnès, Francia. Contacto: info@facultadlalangue.online' },
			{ etiqueta: 'h2', texto: '2. Objeto' },
			{ etiqueta: 'p', texto: 'Estos Términos y Condiciones regulan el acceso y la utilización de este sitio web, incluyendo los contenidos, servicios, formación académica y productos disponibles a través del mismo.' },
			{ etiqueta: 'p', texto: 'Al acceder o utilizar el sitio, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo, le recomendamos no utilizar el sitio.' },
			{ etiqueta: 'h2', texto: '3. Condiciones de acceso' },
			{ etiqueta: 'li', texto: 'El acceso a los contenidos públicos es gratuito.' },
			{ etiqueta: 'li', texto: 'Algunos servicios (cursos, talleres, membresías) requieren registro previo y pago correspondiente.' },
			{ etiqueta: 'li', texto: 'El usuario garantiza que toda la información proporcionada en el proceso de registro es veraz, completa y actualizada.' },
			{ etiqueta: 'h2', texto: '4. Servicios ofrecidos' },
			{ etiqueta: 'p', texto: 'Ofrecemos cursos, talleres, programas de formación, prácticas de acompañamiento, conferencias y acceso a una biblioteca digital de psicología y psicoanálisis. Los detalles, precios y condiciones de cada servicio se especificarán en las páginas correspondientes.' },
			{ etiqueta: 'p', texto: 'Importante: Los programas de formación no sustituyen titulaciones universitarias oficiales a menos que expresamente se indique lo contrario.' },
			{ etiqueta: 'h2', texto: '5. Propiedad intelectual' },
			{ etiqueta: 'p', texto: 'Todos los contenidos (textos, imágenes, videos, documentos, materiales de cursos, logos) son propiedad exclusiva de la International Association for Wellbeing o se utilizan con la debida autorización. Queda estrictamente prohibida cualquier reproducción, distribución, comunicación pública o transformación de dichos contenidos sin autorización previa y por escrito.' },
			{ etiqueta: 'h2', texto: '6. Obligaciones del usuario' },
			{ etiqueta: 'p', texto: 'El usuario se compromete a:' },
			{ etiqueta: 'li', texto: 'No utilizar el sitio web con fines ilícitos o prohibidos por estos términos.' },
			{ etiqueta: 'li', texto: 'No dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal uso.' },
			{ etiqueta: 'li', texto: 'Respetar los derechos de propiedad intelectual e industrial.' },
			{ etiqueta: 'h2', texto: '7. Política de pagos, cancelaciones y modificaciones' },
			{ etiqueta: 'p', texto: 'Los pagos se realizan de manera segura a través de las plataformas indicadas en el sitio. El usuario dispone de un plazo de 14 días naturales desde la fecha de compra para ejercer su derecho de desistimiento, conforme al Código de Consumo francés (art. L221-18). No obstante, una vez accedido al contenido digital o iniciada la formación, el usuario pierde su derecho de desistimiento, conforme a las excepciones previstas en el artículo L221-28. Al inscribirse y acceder al contenido formativo, el usuario reconoce expresamente haber solicitado el inicio inmediato del servicio digital, con pleno conocimiento de que esto implica la pérdida de su derecho de desistimiento.' },
			{ etiqueta: 'p', texto: 'La Facultad se reserva el derecho de realizar las modificaciones necesarias en la organización académica, el calendario o la composición del cuerpo docente, sin que ello constituya una modificación sustancial del servicio prestado ni dé derecho a reembolso. Los contenidos pedagógicos esenciales y los objetivos formativos permanecen garantizados.' },
			{ etiqueta: 'p', texto: 'Cualquier solicitud de baja o revisión será tratada mediante el procedimiento administrativo interno de la Facultad, sin perjuicio de los derechos previstos en la legislación francesa. Dicho procedimiento no implica aceptación automática de reembolso. La Facultad conservará registro electrónico de las inscripciones, comunicaciones y accesos al campus virtual como prueba del inicio efectivo del servicio y de la aceptación de las presentes condiciones.' },
			{ etiqueta: 'h2', texto: '8. Limitación de responsabilidad' },
			{ etiqueta: 'p', texto: 'La Facultad no garantiza que los servicios estén libres de interrupciones o errores. No se hace responsable por daños derivados del uso o imposibilidad de uso del sitio web o de los servicios ofertados, salvo en los casos de dolo o negligencia grave. Los contenidos formativos tienen carácter académico y no sustituyen diagnósticos ni tratamientos psicológicos o médicos.' },
			{ etiqueta: 'h2', texto: '9. Protección de datos personales' },
			{ etiqueta: 'p', texto: 'El tratamiento de datos personales se realiza conforme al Reglamento General de Protección de Datos (RGPD) y la legislación francesa vigente. Puede consultar más detalles en nuestra Política de Privacidad.' },
			{ etiqueta: 'h2', texto: '10. Modificaciones' },
			{ etiqueta: 'p', texto: 'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas desde su publicación en el sitio web. Se recomienda revisar periódicamente esta sección.' },
			{ etiqueta: 'h2', texto: '11. Jurisdicción y Ley aplicable' },
			{ etiqueta: 'p', texto: 'Cualquier disputa se someterá a la jurisdicción exclusiva de los tribunales competentes de Niza, Francia, aplicándose la legislación francesa y, en su defecto, la normativa europea.' },
			{ etiqueta: 'h2', texto: 'Contacto' },
			{ etiqueta: 'p', texto: 'Para cualquier consulta relacionada con esta Política de Privacidad o para ejercer sus derechos, puede contactarnos a:' },
			{ etiqueta: 'li', texto: 'International Association for Wellbeing' },
			{ etiqueta: 'li', texto: '11 Rue des Comtes Léotardi, 06500 Saint-Agnès, Francia' },
			{ etiqueta: 'li', texto: 'Email: info@facultadlalangue.online' },
		],
	},
];
