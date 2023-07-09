interface Game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}

export interface RecentlyPlayedGames {
  response: {
    total_count: number;
    games: Game[];
  };
}

interface Achievement {
  apiname: string;
  achieved: boolean;
  unlocktime: string;
  name: string;
  description: string | null;
}

export interface GetPlayerAchievements {
  playerstats: {
    steamID: string;
    gameName: string;
    success: boolean;
    achievements: Achievement[];
  };
}

export interface OwnedGames {
  response: {
    game_count: number;
    games: Game[];
  };
}
