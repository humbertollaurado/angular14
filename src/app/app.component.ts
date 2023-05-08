import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  

  constructor(public ngZone: NgZone) {}

  click() {
    this.ngZone.runOutsideAngular(()=> {
      console.log('click')
    })
    
  }

  change() {
    console.log('App component')
    return true ;
  }
}
