/**
 * Catálogo de formaciones de Lalangue.
 * Fuente única de datos para las páginas de formación (una página por cada
 * formación). Cada `slug` equivale a la URL de la página, y coincide con las
 * rutas citadas en el menú del header.
 *
 * Cualquier contenido que aún no esté definido va como placeholder:"...".
 */
export interface Formacion {
	slug: string;
	titulo: string;
	categoria: string;
	descripcion: string;
	taglines: string[];
	duracion: string;
	modalidad: string;
	dirigidoA: string;
	incluye: string[];
	segments: { titulo: string; cuerpo: string }[];
}

export const formaciones: Formacion[] = [
	{
		slug: 'master-en-psicoanalisis',
		titulo: 'Máster en Psicoanálisis',
		categoria: 'Máster',
		descripcion:
			'Programa avanzado basado en el pensamiento de Freud y Lacan, con docentes internacionales y titulación desde cualquier lugar del mundo.',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: '2 años (144 clases)',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA:
			'Profesionales que buscan profundizar el pensamiento de Freud y Lacan (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real del Máster cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
	{
		slug: 'psicoterapia-psicoanalitica',
		titulo: 'Diplomatura en Psicoterapia Psicoanalítica',
		categoria: 'Diplomatura',
		descripcion:
			'Formación orientada al desarrollo de competencias clínicas para el acompañamiento terapéutico.',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: '2 años (72 clases)',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA:
			'Profesionales y estudiantes interesados en la práctica clínica con orientación psicoanalítica (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real de la Diplomatura cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
	{
		slug: 'subjetividad-digital',
		titulo: 'Diplomatura en Subjetividad Digital',
		categoria: 'Diplomatura',
		descripcion:
			'Formación orientada a la comprensión del impacto de los entornos digitales en la subjetividad contemporánea (placeholder).',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: 'A definir',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA: 'Profesionales interesados en la subjetividad digital (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real de la Diplomatura cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
	{
		slug: 'clinica-de-parejas',
		titulo: 'Diplomatura en Clínica de Parejas',
		categoria: 'Diplomatura',
		descripcion:
			'Formación orientada a la clínica de parejas y al erotismo relacional (placeholder).',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: 'A definir',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA: 'Profesionales interesados en la terapia de parejas (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real de la Diplomatura cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
	{
		slug: 'psicopatologia-infanto-juvenil',
		titulo: 'Diplomatura en Psicopatología Infanto-Juvenil',
		categoria: 'Diplomatura',
		descripcion:
			'Formación orientada a la psicopatología en la infancia y la adolescencia (placeholder).',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: 'A definir',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA: 'Profesionales interesados en la clínica con infancias y adolescencias (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real de la Diplomatura cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
	{
		slug: 'metapsicologia',
		titulo: 'Diplomatura en Metapsicología',
		categoria: 'Diplomatura',
		descripcion:
			'Formación orientada a los fundamentos metapsicológicos del psicoanálisis (placeholder).',
		taglines: [
			'Elementos mínimos de presentación (placeholder).',
			'Texto breve de la formación, a completar con la información real de la web.',
		],
		duracion: 'A definir',
		modalidad: '100% online con clases grabadas y encuentros sincrónicos',
		dirigidoA: 'Profesionales interesados en introducirse al psicoanálisis (placeholder).',
		incluye: [
			'Supervisión clínica grupal',
			'Participación en espacios comunitarios',
			'Acceso a directorios profesionales internacionales',
			'Certificación europea bajo régimen francés de formación profesionalizante',
		],
		segments: [
			{
				titulo: 'Programa de estudios (placeholder)',
				cuerpo:
					'Contenido académico por definir: se replicará el plan real de la Diplomatura cuando esté disponible.',
			},
			{
				titulo: 'Modalidad y cursada (placeholder)',
				cuerpo:
					'Clases grabadas, encuentros sincrónicos y acompañamiento docente. Detalle a completar.',
			},
		],
	},
];
