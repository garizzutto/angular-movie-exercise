import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moviesBox: Movie[] = []
  actionMovies: Movie[] = []

  constructor(
    private apiService:ApiClientService
  ) { }

  ngOnInit(): void {
    this.apiService.getDiscoverMovies().subscribe(movies => this.moviesBox = movies);
    this.apiService.getCategoryMovies('28').subscribe(movies => this.actionMovies = movies);
  }


}
