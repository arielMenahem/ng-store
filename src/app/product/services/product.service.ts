import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Routes } from 'src/app/core/http/api';
import { StorageService } from 'src/app/core/services/storage.service';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  private productsSubject$: Subject<IProduct[]> = new Subject();

  public getProducts$(): Observable<IProduct[]> {
    // return this.http.get<IProduct[]>(Routes['allProducts']);
    this.fetchProducts();
    return this.productsSubject$.asObservable();
    // return of(PRODUCTS_MOCK);
  }

  public getProductsById$(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(Routes['singleProduct'](id));
  }

  // public fetchProducts(): void {
  //   const existingData: IProduct[] = this.storageService.getData('products');
  //   if (existingData) {
  //     this.productsSubject$.next(existingData);
  //   } else {
  //     this.http.get<IProduct[]>(Routes['allProducts']).subscribe((data) => {
  //       this.storageService.setData('prosucts', data);
  //       this.productsSubject$.next(data);
  //     });
  //   }
  // }

  public fetchProducts(): void {
    const existingData: IProduct[] = this.storageService.getData('products');
    if (existingData) {
      this.productsSubject$.next(existingData);
    } else {
      //mock
      of(PRODUCTS_MOCK).subscribe((data) => {
        this.storageService.setData('products', data);
        this.productsSubject$.next(data);
      });
    }
  }
}
