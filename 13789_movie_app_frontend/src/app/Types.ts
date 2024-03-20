export interface Movie {
  id?: number;
  title: string;
  description: string;
  genreID: number;
  genre?: {
    id: number;
    name: string;
  };
}

export interface Genre {
  id?: number;
  name: string;
}
