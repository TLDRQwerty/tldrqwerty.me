export interface Game {
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
	unlocktime: number;
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

export interface PlayerStats {
	steamID: string;
	gameName: string;
	stats: {
		name: string;
		value: number;
	}[];
	achievements: Achievement[];
}

export interface OwnedGames {
	response: {
		game_count: number;
		games: Game[];
	};
}

export interface App {
	success: boolean;
	data: {
		type: "game";
		name: "string";
		steam_appid: number;
		required_age: string;
		is_free: boolean;
		dlc: number[];
		detailed_description: string;
		about_the_game: string;
		short_description: string;
		supported_laguages: string;
		header_iamge: string;
		capsule_image: string;
		capsule_iamgev5: string;
		website: string | null;
		pc_requirements: {
			minimum: string;
			recommended: string;
		};
		legal_notice: string;
		developers: string[];
		publishers: string[];
		price_overview: {
			currency: string;
			initial: number;
			final: number;
			discount_percent: number;
			initial_formatted: string;
			final_formatted: string;
		};
		packages: number[];
		package_groups: {
			name: "defualt";
			title: string;
			description: string;
			selection_text: string;
			save_text: string;
			display_type: number;
			is_recurring_subscription: boolean;
			subs: {
				packageid: number;
				percent_saving_text: string;
				percent_saving: number;
				option_text: string;
				optioN_description: string;
				can_get_free_license: boolean;
				is_free_license: boolean;
				price_in_cents_with_discount: number;
			}[];
		}[];
		platforms: {
			windows: boolean;
			mac: boolean;
			linux: boolean;
		};
		categories: {
			id: number;
			description: string;
		}[];
		genres: {
			id: string;
			description: string;
		}[];
		screenshots: {
			id: number;
			path_thumbnail: string;
			path_full: string;
		}[];
		movies: {
			id: number;
			name: string;
			thumbnail: string;
			webm: {
				480: string;
				max: string;
			};
			mp4: {
				480: string;
				max: string;
			};
			highlight: boolean;
		}[];
		recommendations: {
			total: number;
		};
		achievements: {
			total: number;
			highlighted: {
				name: string;
				path: string;
			}[];
		};
		release_date: {
			coming_soon: boolean;
			date: string;
		};
		support_info: {
			url: string;
			email: string;
		};
		background: string;
		background_raw: string;
		content_descriptors: {
			ids: number[];
			notes: string;
		};
	};
}

