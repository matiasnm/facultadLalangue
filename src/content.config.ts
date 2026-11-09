import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docentes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docentes' }),
    schema: z.object({
        nombre: z.string(),
        foto: z.string().optional(),
        puesto: z.string().optional(),
        facebook: z.string().url().optional(),
        twitter: z.string().url().optional(),
        instagram: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        youtube: z.string().url().optional(),
        tiktok: z.string().url().optional(),

        peso: z.number().optional(),
    }),
});

const formaciones = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/formaciones' }),
    schema: z.object({
        slug: z.string(),
        titulo: z.string(),
        categoria: z.string(),
        descripcion: z.string(),
        imagen: z.string().optional(),
        duracion: z.string().optional(),
        modalidad: z.string().optional(),
        dirigidoA: z.string().optional(),
        peso: z.number().optional(),
    }),
});

const gruposDeEstudio = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/grupos-de-estudio' }),
    schema: z.object({
        slug: z.string(),
        titulo: z.string(),
        categoria: z.string(),
        descripcion: z.string(),
        imagen: z.string(),
        peso: z.number().optional(),
    }),
});

const articulosInvestigaciones = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/articulos-investigaciones' }),
    schema: ({ image }) => z.object({
        titulo: z.string(),
        descripcion: z.string(),
        categoria: z.enum(['Artículo', 'Investigación', 'Ensayo']),
        imagen: image(),
        imagenAlt: z.string(),
        fecha: z.coerce.date(),
        autor: z.string(),
        ejemplo: z.boolean().default(false),
        peso: z.number().default(0),
    }),
});

const ebooks = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/content-ebooks' }),
    schema: z.object({
        titulo: z.string(),
        subtitulo: z.string().optional(),
        autor: z.string(),
        descripcion: z.string(),
        anio: z.number().int(),
        pdf_file: z.string().optional(),
        portada_file: z.string(),
        portada: z.enum(['vino', 'petroleo', 'arena', 'indigo', 'terracota', 'ciruela']),
        ejemplo: z.boolean().default(false),
        peso: z.number().default(0),
    }),
});

export const collections = {
    docentes,
    formaciones,
    'grupos-de-estudio': gruposDeEstudio,
    'articulos-investigaciones': articulosInvestigaciones,
    'content-ebooks': ebooks,
};
