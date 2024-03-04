import type { RecentlyPlayedGames } from "./types";

const { STEAM_API_KEY, STEAM_ID } = import.meta.env;

export async function getRecentlyPlayedGames(): Promise<RecentlyPlayedGames['response'] | void> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`,
    {
      method: "GET",
    },
  );

  if (response.ok) {
    const json = await response.json();
    return json.response
  }
}

