import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service'
import { AccordionModule } from 'ngx-bootstrap/accordion';

export function appInit() {
  return () => {
    return fetch('http://localhost:3000/contact')
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule, AccordionModule.forRoot()
  ],
  providers: [
    AuthService,
    { provide: APP_INITIALIZER, useFactory: appInit, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule { }
