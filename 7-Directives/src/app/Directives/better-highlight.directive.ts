import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';
  @HostBinding('style.padding') padding: string = '0px';

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseover') mouseOver(){
    // this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'lightgreen');
    this.backgroundColor = 'lightcoral';
    this.padding = '20px';
  }
  @HostListener('mouseout') mouseOut(){
    //this.render.setStyle(this.element.nativeElement,'backgroundColor','lightblue');
    this.backgroundColor = 'lightgray';
    this.padding = '10px';

  }

}
