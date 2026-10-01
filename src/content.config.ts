import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mediation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mediation' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    format: z.string(),
    audience: z.string(),
    venue: z.string(),
    city: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    schedule: z.string().optional(),
    price: z.string().optional(),
    partners: z.string().optional(),
    officialUrl: z.string().url().optional(),
    officialLabel: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    lang: z.enum(['fr', 'es']).default('fr'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { mediation };
