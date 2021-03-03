import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieModel} from '../models/movie-model';
import {MovieApiService} from '../../services/api/movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<MovieModel[]> {
  constructor(private movieApiService: MovieApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel[]> {
    return this.movieApiService.fetchMovies();
  }
}
