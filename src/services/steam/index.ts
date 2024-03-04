import type { OwnedGames, Game, RecentlyPlayedGames, App } from "./types";

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

export async function getOwnedGames(): Promise<Game[]> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.STEAM_API_KEY
    }&steamid=${STEAM_ID}&format=json&include_appinfo=true`,
    { method: "GET" },
  );

  if (response.ok) {
    const json = await response.json() as OwnedGames;

    return json.response.games;
  }

  return []
}

export async function getGameInfo(
  appId: string,
): Promise<Record<string, App> | void> {
  const response = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appId}&I=en_GB`,
  );

  if (response.ok) {
    return await response.json();
  }
}
