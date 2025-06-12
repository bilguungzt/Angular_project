import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
  standalone: false,
})
export class HoverBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      '5px 2px 8px rgba(0,0,0,0.2)'
    );
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
