import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { SingleMovie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie?:SingleMovie
  productors ='';
  genres = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiClientService
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  toListString<T> (arr:T[], predicate: (el:T) => string) {
    return arr.map(predicate).join(' ');
  }

  getMovie () {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    this.apiService.getSingleMovie(id).subscribe(singleMovie => {
      this.movie = singleMovie;
      this.genres = this.toListString(this.movie.genres, el => el.name);
      this.productors = this.toListString(this.movie.production_companies, el => el.name);
    });
  }

}
