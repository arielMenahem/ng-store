import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public id: number;

  product?: IProduct;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.activatedRoute.params.subscribe((data) => {
        this.id = data['id'];
        this.product = this.productService.getProductsById$(this.id);
      })
    );
  }
  onSubmit(product): void {
    this.productService.saveProducts(product);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
