import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

// definiëren van de 'werk' (projecten) collectie
const werkCollectie = defineCollection({
  // loader haalt alle .md bestanden uit de juiste map
  loader: glob({ pattern: '**/*.md', base: './src/content/werk' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    omschrijving: z.string(),
    datum: z.date().optional(),
    cover: image().optional(), 
    alt_tekst: z.string().optional(),
  }),
});

// definiëren van de 'blog' (weekly nerd / reflecties) collectie
const blogCollectie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['weekly-nerd', 'reflectie']),
    datum: z.date(),
  }),
});

// exporteer de collecties
export const collections = {
  'werk': werkCollectie,
  'blog': blogCollectie,
};