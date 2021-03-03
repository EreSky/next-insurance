import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieModel} from '../models/movie-model';
import {ActivatedRoute} from '@angular/router';
import {FilterModel} from '../models/filter-model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit, OnDestroy {
  public movieCollection: Array<MovieModel>;
  public viewCollection: Array<MovieModel>;
  private movieSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.movieSubscription = this.activatedRoute.data
      .subscribe(value => {
        this.movieCollection = value.movies;
        this.viewCollection = this.movieCollection;
      });
  }

  filterMovies(filter: FilterModel): void {
    this.viewCollection = this.movieCollection.filter(
      movie => +movie.rating >= filter.rate
        && movie.title.toLowerCase().indexOf(filter.title) !== -1);
  }

  ngOnDestroy(): void {
    this.movieSubscription?.unsubscribe();
  }
}
