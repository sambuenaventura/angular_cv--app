import { Component, OnInit } from '@angular/core';
import 'src/assets/js/animate.js';
declare var TxtType: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Sam'; // String Interpolation (1)
  heroDesc = 'Empowering users through design and code'; // String Interpolation (2)
  myColor = '#1abc9c'; // Style Binding (1)

  // Event Binding (1)
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  isDisabled: boolean = false;

  ngOnInit() {
    this.initTypewriter();
  }

  initTypewriter() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);
  }
}
