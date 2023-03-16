import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductformComponent } from './product-form.component';

describe('ProductformComponent', () => {
  let component: ProductformComponent;
  let fixture: ComponentFixture<ProductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
