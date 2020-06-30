import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HighlightDirective } from './highlight.directive';
import { CommonItemComponent } from './common-item/common-item.component';



@NgModule({
  declarations: [TestDirective, HighlightDirective, CommonItemComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  exports: [TestDirective, AccordionModule, HighlightDirective, CommonItemComponent]
})
export class SharedModule { }
