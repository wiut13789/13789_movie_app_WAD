export interface Movie {
  id?: number;
  title: string;
  description: string;
  genreId: number;
  genre?: {
    id: number;
    name: string;
  };
}

export interface Genre {
  id?: number;
  name: string;
}
