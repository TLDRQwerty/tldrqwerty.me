import { defineCollection } from "astro:content";
import * as z from "zod";

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

export const collections = {
  blog: blogCollection,
};
