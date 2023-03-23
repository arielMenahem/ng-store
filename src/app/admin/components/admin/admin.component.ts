import { DataSource } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { ProductFormComponent } from 'src/app/shared/components/product-form/product-form.component';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy, AfterViewInit {
  public displayedColumns: string[] = ['id', 'title', 'price', 'image', 'edit'];
  public dataSource = new MatTableDataSource<IProduct>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private productsService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts$().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.paging();
    });
    this.productsService.fetchProducts();
  }
  ngOnDestroy(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  announceSortChange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {}

  public paging() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '250px',
      data: { name: 'John' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
