import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective {

  @Input() fpHighlight;
  hasClass = false;

  constructor(private el: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('click')
  clickFn() {
    if(!this.hasClass) {
      this.setClass()
      this.hasClass = true;
    } else {
      this.unsetClass()
      this.hasClass = false;
    }
  }

  setClass() {
    this.renderer.addClass(this.el.nativeElement, this.fpHighlight || 'highlight');
  }

  unsetClass() {
    this.renderer.removeClass(this.el.nativeElement, this.fpHighlight || 'highlight');
  }
}
