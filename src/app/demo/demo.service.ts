import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DemoData } from '../models/demo-data';

@Injectable()
export class DemoService {

  demoDataSubj = new BehaviorSubject<DemoData[]>(null);
  demoData$ = this.demoDataSubj.asObservable();

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get<DemoData[]>('http://localhost:3000/demo').subscribe(data => this.demoDataSubj.next(data));
  }


}
