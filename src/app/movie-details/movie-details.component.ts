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
      const rate = localStorage.getItem('rating')
      if (rate) {
        const newRate = JSON.parse(rate);
        if (newRate.id === singleMovie.id) singleMovie.vote_average = newRate.rating * 2;
      }

      this.movie = singleMovie;
      this.genres = this.toListString(this.movie.genres, el => el.name);
      this.productors = this.toListString(this.movie.production_companies, el => el.name);
    });
  }

  newRating (rating: number) {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    const newRate = {
      id,
      rating
    }

    localStorage.setItem('rating', JSON.stringify(newRate));

    this.apiService.setNewRating(newRate);
  }

}
