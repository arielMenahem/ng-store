import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  public dataSource = new MatTableDataSource<IProduct>();
  public productId: string = ' ';
  public product?: IProduct;
  constructor(
    private productsService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // debugger;
    this.productId = this.route.snapshot.params['id'];
    this.productsService.getProductsById$(this.productId).subscribe((data) => {
      this.product = data;
      // debugger;
    });

    // this.route.snapshot.params.subscribe((params) => {
    //   this.productId = params['id'];
    //   this.productsService
    //     .getProductsById$(this.productId)
    //     .subscribe((data) => {
    //       debugger;
    //       // this.dataSource = new MatTableDataSource(data);
    //     });
    // });
  }

  ngOnDestroy(): void {}
}
