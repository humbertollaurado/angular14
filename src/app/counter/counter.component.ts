import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  value = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onClick(isAdd: boolean): void {
    if (isAdd) {
      this.value++;
    }
    if (!isAdd) {
      this.value--;
    }
  }

  change() {
    console.log('counter')
  }
}
