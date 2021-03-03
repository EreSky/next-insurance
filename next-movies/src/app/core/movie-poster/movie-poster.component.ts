import {Component, Input} from '@angular/core';
import {MovieModel} from '../models/movie-model';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {

  constructor() { }

  @Input() movie: MovieModel;
}
