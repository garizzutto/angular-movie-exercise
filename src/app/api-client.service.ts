import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, SingleMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseUrlMovie = 'http://movied.herokuapp.com';
  
  constructor(private http: HttpClient) { }

  getDiscoverMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrlMovie}/discover`)
  }

  getCategoryMovies(categoryId:string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrlMovie}/categories/${categoryId}`)
  }

  getSingleMovie (id: number): Observable<SingleMovie> {
    return this.http.get<SingleMovie>(`${this.baseUrlMovie}/movie/${id}`);
  }
}
