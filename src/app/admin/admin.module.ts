import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, EditProductComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class AdminModule {}
