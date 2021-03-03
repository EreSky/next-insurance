import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MovieModel} from '../models/movie-model';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {

  constructor() { }

  @ViewChild('title')
  title: ElementRef;

  @Input() movie: MovieModel;

}
