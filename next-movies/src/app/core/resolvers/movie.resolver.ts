import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieApiService} from '../../services/api/movie-api.service';
import {MovieModel} from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<MovieModel> {
  constructor(private movieApiService: MovieApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel> {
    return this.movieApiService.getMovie(route.paramMap.get('id'));
  }
}
