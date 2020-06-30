import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  productsSubj = new BehaviorSubject<Product[]>(null);
  products$ = this.productsSubj.asObservable();

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => this.productsSubj.next(data));
  }

}
