import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductModel } from 'src/app/shared/interfaces/product-model';
import { MockProductService } from 'src/app/shared/mock/mock-product-service';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource();

  constructor(private dialog: MatDialog, private productService: MockProductService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.productService.getTableData().subscribe( data => {
      this.dataSource.data = data;
    })
  }

  open(data?: ProductModel){
    this.dialog.open(ProductDialogComponent, {
      width: '25vw',
      data: {
        actionType: data ? 'Edit' : 'Add',
        product: data
      },
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
