import type { Artist, CurrentlyPlaying, Pagination, Track } from "./types";

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  import.meta.env;

const clientIdAndSecret = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

const headers = {
  Authorization: `Basic ${clientIdAndSecret}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

export async function getAccessToken(): Promise<{
  access_token: string;
} | void> {
  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: "POST",
    headers,
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (response.ok) {
    return await response.json();
  }
}

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export async function getSpotifyNowPlaying(): Promise<CurrentlyPlaying | void> {
  const { access_token: accessToken } = await getAccessToken();

  const response = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as CurrentlyPlaying;
  }
}

const SPOTIFY_TOP_ENDPOINT = "https://api.spotify.com/v1/me/top";

export async function getSpotifyTop<
  TType extends "artists" | "tracks",
  TReturn = TType extends "tracks" ? Track : Artist
>(
  type: TType,
  limit = 50,
  offset?: number
): Promise<Pagination<TReturn> | void> {
  const { access_token: accessToken } = await getAccessToken();

  const response = await fetch(`${SPOTIFY_TOP_ENDPOINT}/${type}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as Pagination<TReturn>;
  }
}
