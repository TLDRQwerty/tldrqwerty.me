import { getEnvVar } from "src/utils/getEnv";
import type {
  OwnedGames,
  Game,
  RecentlyPlayedGames,
  App,
  GetPlayerAchievements,
} from "./types";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config({ path: ".env.local" });

const STEAM_API_KEY = getEnvVar("STEAM_API_KEY");
const STEAM_ID = getEnvVar("STEAM_ID");

export async function getRecentlyPlayedGames(): Promise<
  RecentlyPlayedGames["response"] | void
> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`,
    {
      method: "GET",
    },
  );

  if (response.ok) {
    const json = await response.json();
    return json.response;
  }
}

export async function getOwnedGames(): Promise<Game[]> {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${
      STEAM_API_KEY
    }&steamid=${STEAM_ID}&format=json&include_appinfo=true`,
    { method: "GET" },
  );

  if (response.ok) {
    const json = (await response.json()) as OwnedGames;

    return json.response.games;
  } else {
		console.log(response)
	}

  return [];
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

export async function getUserStatsForGame(
  appid: string,
): Promise<unknown[] | void> {
  const response = await fetch(
    `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appid}&key=${STEAM_API_KEY}&steamid=${STEAM_ID}&I=en_GB`,
  );

  if (response.ok) {
    return await response.json();
  }
}

export async function getPlayerAchievements(
  appid: string,
): Promise<void | GetPlayerAchievements> {
  const response = await fetch(
    `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?key=${
      STEAM_API_KEY
    }&steamid=${STEAM_ID}&appid=${appid}&l=en_GB&format=json`,
  );
  if (response.ok) {
    return await response.json();
  }
}
