import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {}

  click() {
    console.log('click')
  }

  change() {
    console.log('App component')
    return true ;
  }
}
