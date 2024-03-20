import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie, Genre } from './Types';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllMovies() {
    return this.httpClient.get<Movie[]>(
      'https://localhost:7152/api/Movies/GetAll'
    );
  }

  getMovieByID(id: number) {
    return this.httpClient.get<Movie>(
      'https://localhost:7152/api/Movies/GetByID/' + id
    );
  }
  editMovie(item: Movie) {
    return this.httpClient.put(
      'https://localhost:7152/api/Movies/Update',
      item
    );
  }
  deleteMovie(id: number) {
    return this.httpClient.delete(
      'https://localhost:7152/api/Movies/Delete/' + id
    );
  }
  createMovie(item: Movie) {
    return this.httpClient.post<Movie>(
      'https://localhost:7152/api/Movies/Create',
      item
    );
  }
  getAllGenres() {
    return this.httpClient.get<Genre[]>(
      'https://localhost:7152/api/Genres/Get'
    );
  }

  getGenreByID(id: Genre) {
    return this.httpClient.get<Genre>(
      'https://localhost:7152/api/Genres/GetByID/' + id
    );
  }
  editGenre(item: Genre) {
    return this.httpClient.put(
      'https://localhost:7152/api/Genres/Update',
      item
    );
  }
  deleteGenre(id: number) {
    return this.httpClient.delete(
      'https://localhost:7152/api/Genres/Delete/' + id
    );
  }
  createGenre(item: Genre) {
    return this.httpClient.post<Genre>(
      'https://localhost:7152/api/Genres/Create',
      item
    );
  }
}
