import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HighlightDirective } from './highlight.directive';
import { CommonItemComponent } from './common-item/common-item.component';
import { OnlyForAuthorizedDirective } from './only-for-authorized.directive';



@NgModule({
  declarations: [TestDirective, HighlightDirective, CommonItemComponent, OnlyForAuthorizedDirective],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [TestDirective, AccordionModule, HighlightDirective, CommonItemComponent, OnlyForAuthorizedDirective]
})
export class SharedModule { }
