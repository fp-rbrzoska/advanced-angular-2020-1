import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs';
import { DemoData } from '../models/demo-data';
import { TestDirective } from '../shared/test.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'fp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

  @ViewChild('elementList', {static: false}) list: ElementRef;
  @ViewChildren(HighlightDirective) hElements: QueryList<HighlightDirective>;

  demoData$: Observable<DemoData[]>;
  constructor(private demoService: DemoService) {
    console.log(demoService)
    this.demoData$ = this.demoService.demoData$;
    this.demoService.fetchData();
  }

  ngOnInit(): void {
    console.log(this.list)
  }

  ngAfterViewInit(): void {
    console.log(this.list)
  }

  selectAll() {
    this.hElements.forEach(el => {
      el.hasClass = false;
      el.unsetClass();
      el.setClass();
    })
  }

}
