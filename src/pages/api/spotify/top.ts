import type { APIRoute } from "astro";
import { getSpotifyTop } from "../../../services/spotify";

const headers: HeadersInit = {
  "Content-Type": "application/json",
  "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
};

export const get: APIRoute = async ({ request }) => {
  if (request.method !== "GET") {
    return new Response(undefined, { status: 400 });
  }

  const response = await getSpotifyTop();

  if (!response) {
    return new Response(undefined, {
      headers,
      status: 200,
    });
  }

  return new Response(JSON.stringify(response), { status: 200, headers });
};
