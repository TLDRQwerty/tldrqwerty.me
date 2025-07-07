import { defineCollection, z } from "astro:content";

import { file, glob } from "astro/loaders";

const games = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/data/games",
  }),
  schema: z.object({
    name: z.string(),
    games: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
});

const steam = defineCollection({
  loader: file("./src/data/steam.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    appid: z.number(),
    playtime: z.number(),
    box_art: z.string().nullable(),
    header_art: z.string().nullable(),
    information: z
      .object({
        detailed_description: z.string(),
        about_the_game: z.string(),
        short_description: z.string(),
        categories: z.array(
          z.object({
            id: z.number(),
            description: z.string(),
          }),
        ).optional(),
        genres: z.array(
          z.object({
            id: z.string(),
            description: z.string(),
          }),
        ).optional(),
      })
      .nullable(),
    slug: z.string(),
    achievements: z.array(
      z.object({
        apiname: z.string(),
        achieved: z.number().transform((n) => n === 1),
        unlocktime: z.number(),
        name: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = {
  games,
  steam,
};
