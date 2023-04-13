import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  @Output() submitEmmiter: EventEmitter<IProduct> = new EventEmitter();
  private _product: IProduct;

  public productForm?: FormGroup = new FormGroup({});
  public ratingForm: FormGroup = new FormGroup({});
  public dataSource = new MatTableDataSource<IProduct>();
  public productId: string = ' ';

  constructor(
    // private productsService: ProductService,
    private route: ActivatedRoute
  ) {}

  prePopulateForm(product: IProduct): void {
    this.productForm.patchValue({
      title: product.title,
      id: product.id,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    });
  }
  ngOnInit(): void {
    // debugger;
    this.initForm();
    this.productId = this.route.snapshot.params['id'];

    this.productForm.patchValue(this.product);
  }
  @Input() set product(product: IProduct) {
    if (this.productForm) {
      this.prePopulateForm(product);
    }
    this._product = product;
  }
  get product(): IProduct {
    return this._product;
  }
  ngOnDestroy(): void {}

  private initForm(): void {
    //initialize the product form
    this.productForm = new FormGroup({
      category: new FormControl(this.product.category, Validators.required),
      description: new FormControl(
        this.product.description,
        Validators.required
      ),
      id: new FormControl(this.product.id, Validators.required),
      price: new FormControl(this.product.price, [Validators.required]),
      title: new FormControl(this.product.title, Validators.required),
      image: new FormControl(this.product.image, Validators.required),
      rating: new FormGroup({
        rate: new FormControl(this.product.rating.rate, [
          Validators.min(1),
          Validators.max(5),
        ]),
        count: new FormControl(this.product.rating.count),
      }),
    });
  }

  public onSubmit(): void {
    debugger;
    this.submitEmmiter.emit(this.productForm.value);
  }

  public getErrorMessage(name: string): string {
    const myFieldControl = this.productForm.get(name);
    if (myFieldControl.errors['required']) {
      return 'This field is required';
    }
    if (myFieldControl.errors['pattern']) {
      return 'Invalid format';
    }
    return '';
    // add more conditions to handle other error types
  }
}
