import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { ProductsItemComponent } from '../products-item/products-item.component';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @ViewChildren(ProductsItemComponent) items: QueryList<ProductsItemComponent>;
  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.products$;
    this.productsService.fetchData();
  }

  ngOnInit(): void {
  }

  toggleDescriptions() {
    this.items.forEach(item => item.showDescription = !item.showDescription)
  }


}
