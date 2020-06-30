import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective {

  @Input() fpTest;
  constructor(private el: ElementRef, private renderer: Renderer2 ) {
  }
  @HostListener('mouseover')
  mouseOverFn() {
    console.log('test')
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.fpTest || 'blue');
  }

  @HostListener('mouseout')
  mouseOutFn() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

}
