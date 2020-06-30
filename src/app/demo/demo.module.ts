import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoService } from './demo.service';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../products/products.service';
import { DemoInterceptorService } from './demo-interceptor.service';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [DemoService, { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptorService, multi: true } ]
})
export class DemoModule { }
