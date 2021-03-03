import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './core/movie/movie.component';
import {MovieResolver} from './core/resolvers/movie.resolver';
import {MoviesResolver} from './core/resolvers/movies.resolver';
import {MovieDashboardComponent} from './core/movie-dashboard/movie-dashboard.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieDashboardComponent,
    resolve: {
      movies: MoviesResolver
    }
  },
  {
    path: 'movies/:id',
    component: MovieComponent,
    resolve: {
      movie: MovieResolver
    }
  },
  {
    path: '**',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
