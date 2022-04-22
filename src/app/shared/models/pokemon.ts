export interface Stats {
  stats?: string;
  base_stat?: number;
}

export interface Especies {
  name?: string;
}
export interface Pokemon {
  id?: number;
  name: string;
  url: string;
  photo?: string;
  stats: Stats[];
  especies?: Especies[];
}

export interface Types {
  name?: string;
}
