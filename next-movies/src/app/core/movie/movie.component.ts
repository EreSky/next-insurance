import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieModel} from '../models/movie-model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  private movieSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.movieSubscription = this.activatedRoute.data
      .subscribe(value => {
        this.movie = value.movie;
      });
  }

  public goBack(): void {
    this.router.navigate(['movies']);
  }

  ngOnDestroy(): void {
    this.movieSubscription?.unsubscribe();
  }
}
