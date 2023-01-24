import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-dream-app';
  currentPage: string;
  constructor() {
    this.currentPage = 'home'; // default page
  }
    // two-way data binding
    showData($event: any) {
      console.log('button is clicked!');
      if ($event) {
        console.log($event.target);
        console.log($event.target.value);
      }
    }
}
