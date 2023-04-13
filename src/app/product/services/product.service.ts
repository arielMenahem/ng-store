import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
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
  private productsSubject$: BehaviorSubject<IProduct[]> = new BehaviorSubject(
    []
  );

  public getProducts$(): Observable<IProduct[]> {
    this.fetchProducts();
    return this.productsSubject$.asObservable();
    // return of(PRODUCTS_MOCK);
  }

  public getProductsById$(id: number): IProduct {
    this.fetchProducts();
    const productsList = this.productsSubject$.value;
    const productsLIndex: number = productsList.findIndex(
      (product) => product.id === Number(id)
    );
    if (productsList[productsLIndex]) {
      return productsList[productsLIndex];
    } else {
      return null;
    }
  }
  public saveProducts(values: any): void {
    const existingData: IProduct[] = this.storageService.getData('products');

    // Find the item by ID
    let id = values.id;
    if (!id) {
      return;
    }
    let itemIndex = existingData.findIndex((item: any) => item.id === id);
    existingData[itemIndex] = values;
    this.storageService.setData('products', existingData);
    this.fetchProducts();
  }

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
