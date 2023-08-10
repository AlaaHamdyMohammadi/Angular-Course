import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'gray';
  @Input() highlightColor: string = 'lightcoral';

  constructor(private element: ElementRef) {
    element.nativeElement;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'lightblue';
    this.element.nativeElement.style.padding = '10px';
  }

  @HostListener('mouseover') mouseOver(){
    this.element.nativeElement.style.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseout') mouseOut(){
    this.element.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
