export interface Track {
  name: string;
  playcount: number;
  url: string;
  mbid: string;
  streamable: boolean;
  artist: Artist;
  image: Image[];
}

export interface Artist {
  url: string;
  name: string;
  mbid: string;
}

export interface Album {
  name: string;
  playcount: number;
  url: string;
  artist: Artist;
  image: Image[];
}

interface Image {
  size: "small" | "medium" | "large" | "extralarge";
  "#text": string;
}
