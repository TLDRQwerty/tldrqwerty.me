interface Image {
  url: string;
  height: number;
  width: number;
}

interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  genres: string[];
  href: string;
  images: Image[];
  name: string;
  type: "artist";
  url: string;
  external_urls: ExternalUrls;
}

interface Album {
  album_type: string;
  total_tracks: number;
  external_urls: ExternalUrls;
  href: string;
  id: number;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  type: "album";
  uri: string;
  genres: string[];
  label: string;
  album_group: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  href: string;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: "track";
  url: string;
  is_local: boolean;
  external_urls: ExternalUrls;
}

export interface CurrentlyPlaying {
  is_playing: boolean;
  item: Track;
}

export interface Pagination<D = Record<string, unknown>> {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: D[];
}
