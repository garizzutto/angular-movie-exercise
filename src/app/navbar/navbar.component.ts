import { Component, OnInit, Output } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../movie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  categories: Category[] = [];

  constructor(
    private apiService: ApiClientService
  ) { }

  ngOnInit(): void {
    this.getCatergories()
  }

  getCatergories () {
    this.apiService.getCatergories().subscribe(categories => this.categories = categories)
  }

  toggleMenu () {
    this.showMenu = !this.showMenu
  }

  clickCategory (category: Category) {
    // this.categories.filter(el => el.name === name)[0].id
    this.apiService.changeCategory(category);
    this.toggleMenu();
  }
}
