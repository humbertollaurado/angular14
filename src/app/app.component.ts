import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
