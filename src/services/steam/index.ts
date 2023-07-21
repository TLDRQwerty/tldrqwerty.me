import type {
  GetPlayerAchievements,
  OwnedGames,
  RecentlyPlayedGames,
} from "./types";
const { STEAM_API_KEY, STEAM_ID } = import.meta.env;

export async function getRecentlyPlayedGames(): Promise<RecentlyPlayedGames | void> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`,
    {
      method: "GET",
    }
  );

  if (response.ok) {
    return await response.json();
  }
}

export async function getPlayerAchievements(
  appid: string
): Promise<GetPlayerAchievements | void> {
  const response = await fetch(
    `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?key=${
      import.meta.env.STEAM_API_KEY
    }&steamid=${STEAM_ID}&appid=${appid}&l=en_GB&format=json`,
    { method: "GET" }
  );

  if (response.ok) {
    return await response.json();
  }
}

export async function getOwnedGames(): Promise<OwnedGames | void> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${
      import.meta.env.STEAM_API_KEY
    }&steamid=${STEAM_ID}&format=json&include_appinfo=true`,
    { method: "GET" }
  );

  if (response.ok) {
    return await response.json();
  }
}
