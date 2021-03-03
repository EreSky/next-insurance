import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MovieModel} from '../../core/models/movie-model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private static readonly MOVIE_BASE_URL = 'http://localhost:3000/movies';
  private dataLoaded = false;
  private movies: MovieModel[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public fetchMovies(): Observable<MovieModel[]> {
    if (this.dataLoaded) {
      return of(this.movies);
    } else {
      return this.httpClient.get<MovieModel[]>(MovieApiService.MOVIE_BASE_URL)
        .pipe(
          tap(movies => {
            this.dataLoaded = true;
            this.movies = movies;
          })
        );
    }
  }

  getMovie(movieId: string): Observable<MovieModel> {
    const cached = this.movies.find(value => value.id === movieId);
    if (cached) {
      return of(cached);
    } else {
      return this.httpClient.get<MovieModel[]>(`${MovieApiService.MOVIE_BASE_URL}/${movieId}`)
        .pipe(
          map(movies => movies[0])
        );
    }
  }
}
