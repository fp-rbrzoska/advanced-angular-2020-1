import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [TestDirective, HighlightDirective],
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  exports: [TestDirective, AccordionModule, HighlightDirective]
})
export class SharedModule { }
