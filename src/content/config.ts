import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        draft: z.optional(z.boolean()).default(true)
    }),
})

export const collections = {
    'blog': blogCollection,
}