import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective {

  @Input() fpHighlight;
  private hasClass = false;

  constructor(private el: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('click')
  clickFn() {
    if(!this.hasClass) {
      this.renderer.addClass(this.el.nativeElement, this.fpHighlight || 'highlight');
      this.hasClass = true;
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.fpHighlight || 'highlight');
      this.hasClass = false;
    }
  }
}
