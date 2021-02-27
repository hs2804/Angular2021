import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elementRef: ElementRef,
     private renderer : Renderer2) { }
  
  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
    this.backgroundColor = 'blue';
    this.color = 'white';
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','black');
    this.backgroundColor= "transparent";
    this.color = "black";
  }
}
