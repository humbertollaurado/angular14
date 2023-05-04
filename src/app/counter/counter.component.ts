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
    //console.log(isAdd)
    if(isAdd) {
      this.value++;
      this.renderer.setProperty(this.paragraph.nativeElement, 'innerHTML', this.value); 
      //this.cdr.detectChanges();
      //this.cdr.markForCheck();
      return;
    }
    this.value --; 
    this.renderer.setProperty(this.paragraph.nativeElement, 'innerHTML', this.value);  
    //this.cdr.detectChanges();
    //this.cdr.markForCheck();
  }

  change() {
    console.log('counter')
  }
}
