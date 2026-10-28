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

export const collections = { docentes, formaciones };