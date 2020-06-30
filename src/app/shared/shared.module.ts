import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [TestDirective],
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  exports: [TestDirective, AccordionModule]
})
export class SharedModule { }
