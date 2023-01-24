import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  template: `
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
        augue eget lacus tempor, vel congue velit iaculis.
      </p>
    </div>
  `,
})
export class AboutComponent {}
