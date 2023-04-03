import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    publishDate: z
      .string()
      .or(z.date())
      .transform((d) => new Date(d)),
    updatedDate: z
      .string()
      .or(z.date())
      .transform((d) => new Date(d))
      .optional(),
    draft: z.boolean().optional(),
  }),
});

const gamesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    steam_id: z.number(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  games: gamesCollection,
};
