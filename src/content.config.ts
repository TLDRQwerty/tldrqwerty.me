import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders'

const games = defineCollection({
	loader: glob({
		pattern: '*.json',
		base: "./src/data/games"
	}),
	schema: z.object({
		name: z.string(),
		games: z.array(z.object({
			name: z.string(),
		}))
	})
})

export const collections = {
	games,
}
