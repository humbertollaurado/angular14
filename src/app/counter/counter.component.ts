import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  value = 0;

  @ViewChild("p") paragraph!: ElementRef<HTMLParagraphElement>;

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

    this.cdr.detectChanges();
  }

  change() {
    console.log('counter')
  }
}
