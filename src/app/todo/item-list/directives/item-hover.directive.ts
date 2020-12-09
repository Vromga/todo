import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appItemHover]'
})
export class ItemHoverDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.classList.add('active');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.classList.remove('active');
  }

}
