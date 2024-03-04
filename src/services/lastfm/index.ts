import type { Track, Artist, Album } from "./types";
const { LASTFM_API_KEY } = import.meta.env;

const USERNAME = "TLDRQwerty";

export async function getTopTracks(count = 5): Promise<Track[]> {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=7day`,
  );

  if (response.ok) {
    const json = await response.json();
    return json.toptracks.track.slice(0, count);
  }

  return [];
}

export async function getTopArtists(count = 5): Promise<Artist[]> {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=7day`,
  );

  if (response.ok) {
    const json = await response.json();
    return json.topartists.artist.slice(0, count);
  }
  return [];
}

export async function getTopAlbums(
  count = 5,
  includingImages = false,
): Promise<Album[]> {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=7day`,
  );
  if (response.ok) {
    const json = await response.json() as { topalbums: { album: Album[] } }
    let albums = json.topalbums.album;

    if (includingImages) {
      albums = albums.filter((a) => a.image[0] != null && a.image[0]["#text"] != "");
    }

    return albums.slice(0, count);
  }
  return [];
}
