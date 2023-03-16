import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    this.productsService.getProducts$().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  ngOnDestroy(): void {}
}
