import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  value = 0;

  @ViewChild("p") paragraph!: ElementRef<HTMLParagraphElement>;

  constructor(private cdr: ChangeDetectorRef, private readonly renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onClick(isAdd: boolean): void {
    if (isAdd) {
      this.value++;
    }
    if (!isAdd) {
      this.value--;
    }

    this.renderer.setProperty(this.paragraph.nativeElement, 'innerHTML', this.value);
    (this.value >= 0) ? this.renderer.setStyle(this.paragraph.nativeElement, 'background-color', 'green') 
                     : this.renderer.setStyle(this.paragraph.nativeElement, 'background-color', 'red')

    //this.cdr.detectChanges();
    //this.cdr.markForCheck();
  }

  change() {
    console.log('counter')
  }
}
