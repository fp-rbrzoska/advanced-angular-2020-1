import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.products$;
    this.productsService.fetchData();
  }

  ngOnInit(): void {
  }


}
