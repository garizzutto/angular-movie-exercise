import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Movie, SingleMovie, Category } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseUrlMovie = 'http://movied.herokuapp.com';
  category$: Subject<Category> = new Subject();
  rating$: Subject<{id: number, rating: number}> = new Subject();

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

  getCatergories () : Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrlMovie}/categories/`);
  }

  changeCategory (oneCategory: Category) {
    this.category$.next(oneCategory);
  }

  setNewRating (obj:{id:number, rating:number}) {
    this.rating$.next(obj);
  }
}
