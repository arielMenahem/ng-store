import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, ProductFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CardComponent, MaterialModule, ProductFormComponent],
})
export class SharedModule {}
