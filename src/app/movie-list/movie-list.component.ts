import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies:Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  scrollToLeft (component:HTMLDivElement) {
    let movieList = component.querySelector('.movie-list');
    if (movieList !== null) {
      movieList.scrollLeft += 200;
    }
  }

  scrollToRight (component:HTMLDivElement) {
    let movieList = component.querySelector('.movie-list');
    if (movieList !== null) {
      movieList.scrollLeft -= 200;
    }
  }

}
