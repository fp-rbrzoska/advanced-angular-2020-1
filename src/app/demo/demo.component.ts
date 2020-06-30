import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren, Inject } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs';
import { DemoData } from '../models/demo-data';
import { TestDirective } from '../shared/test.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { ProductsService } from '../products/products.service';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

@Component({
  selector: 'fp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

  @ViewChild('elementList', {static: false}) list: ElementRef;
  @ViewChildren(HighlightDirective) hElements: QueryList<HighlightDirective>;

  demoData$: Observable<DemoData[]>;
  constructor(private demoService: DemoService, @Inject(HTTP_INTERCEPTORS) private interceptors: HttpInterceptor[] ) {
    console.log(interceptors)
    this.demoData$ = this.demoService.demoData$;
    this.demoService.fetchData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  selectAll() {
    this.hElements.forEach(el => {
      el.hasClass = false;
      el.unsetClass();
      el.setClass();
    })
  }

}
