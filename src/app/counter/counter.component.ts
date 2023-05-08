import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  value = 0;

  @ViewChild("p") paragraph!: ElementRef<HTMLParagraphElement>;

  constructor(private cdr: ChangeDetectorRef, public ngZone: NgZone) { }

  ngOnInit(): void {
  }

  onClick(isAdd: boolean): void {

    (isAdd) ? this.value++ : this.value--;
    /*const interval$ = interval(1000);
    interval$.subscribe(()=> {
      this.value++;
      this.cdr.markForCheck();
    })
    
 
    this.ngZone.runOutsideAngular(()=> {
      interval$.subscribe(()=> {
        this.value++;
          console.log('bb')
          if(this.value % 2 == 0) {
            //this.cdr.markForCheck();
            this.cdr.detectChanges();
          }
      })
    })*/

  }

  change() {
    console.log('counter')
  }
}
