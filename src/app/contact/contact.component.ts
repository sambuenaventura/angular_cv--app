import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  clientName: string = 'Sam Buenaventura'; //Property Binding (1)
  clientEmail: string = 'spbuenaventura1@student.hau.edu.ph'; //Property Binding (1)
  myColor = 'white'; // Style Binding (2)
  appliedCSSClass = 'green'; // Class Binding (2)

  // Event Binding (2)
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
