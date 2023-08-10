import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private element: ElementRef) {
    element.nativeElement
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'lightblue';
    this.element.nativeElement.style.padding = '10px';
  }

}
