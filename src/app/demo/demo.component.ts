import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs';
import { DemoData } from '../models/demo-data';

@Component({
  selector: 'fp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  demoData$: Observable<DemoData[]>;
  constructor(private demoService: DemoService) {
    this.demoData$ = this.demoService.demoData$;
    this.demoService.fetchData();
  }

  ngOnInit(): void {
  }

}
