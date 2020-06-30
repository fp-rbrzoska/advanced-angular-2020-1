import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './demo.service';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    HttpClientModule
  ],
  providers: [DemoService]
})
export class DemoModule { }
