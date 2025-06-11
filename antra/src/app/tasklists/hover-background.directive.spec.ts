import { HoverBackgroundDirective } from './hover-background.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HoverBackgroundDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div'),
    } as ElementRef;
    const mockRenderer = jasmine.createSpyObj('Renderer2', [
      'setStyle',
      'removeClass',
      'addClass',
    ]);

    const directive = new HoverBackgroundDirective(
      mockElementRef,
      mockRenderer
    );
    expect(directive).toBeTruthy();
  });
});
