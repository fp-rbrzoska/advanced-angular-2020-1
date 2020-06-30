import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './demo.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [DemoService]
})
export class DemoModule { }
