import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie, Category } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moviesBox: Movie[] = []
  actionMovies: Movie[] = []
  currentCategory: Category = {
    id: 28,
    name: 'Action'
  }

  constructor(
    private apiService:ApiClientService
  ) { }

  ngOnInit(): void {
    this.apiService.getDiscoverMovies().subscribe(movies => this.moviesBox = movies);
    this.apiService.category$.subscribe(category => {
      this.getMovies(String(category.id));
      this.currentCategory = category;
    })
    this.getMovies(String(this.currentCategory.id));
    this.getNewRating();
  }

  getMovies (id: string) {
    this.apiService.getCategoryMovies(id).subscribe(movies => this.actionMovies = movies);
  }

  getNewRating () {
    const rating = localStorage.getItem('rating');
    if (rating) {
      const newRating = JSON.parse(rating);
      this.moviesBox.map(el => {
        if (el.id === newRating.id) {
          el.vote_average = newRating.rating * 2;
        }
      })
      this.actionMovies.map(el => {
        if (el.id === newRating.id) {
          el.vote_average = newRating.rating * 2;
        }
      })
    }
  }
}
