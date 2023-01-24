import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appliedCSSClass = 'green'; // Class Binding (1)

  currentPage: string;

  constructor() {
    this.currentPage = 'home'; // default page
  }
  changePage(page: string) {
    this.currentPage = page;
  }
}
