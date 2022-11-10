import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/shared/interfaces/product-model';
import { MockProductService } from 'src/app/shared/mock/mock-product-service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  
  productList: ProductModel[] = [];

  constructor(public dialog: MatDialog, private productService: MockProductService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.productService.getTableData().subscribe(data => {
      this.productList = data;
    })
  }

  buyNow(data: any){
    //Seperated::  CheckoutComponent
    //Inline:: OrderDetailsDialog
    this.dialog.open(CheckoutComponent, {
      width: '25vw',
      data: data,
    })
  }

}

/*** ****/
@Component({
  selector: 'order-details-dialog',
  template: `
  <h2 mat-dialog-title>Order Summary</h2>
  <mat-dialog-content class="mat-typography">
    <p>An app's components typically define many views, arranged hierarchically. Angular provides
    the Router service to help you define navigation paths among views. The router provides
    sophisticated in-browser navigational capabilities.</p>
  </mat-dialog-content>
  <mat-dialog-actions fxLayout="row">
    <button (click)="save()" mat-flat-button color="primary">Save</button>
    <div fxFlex></div>
    <button (click)="close()" mat-flat-button >Cancel</button>
  </mat-dialog-actions>
  `,
})
export class OrderDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<OrderDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, /** to use for you to access the data */
  ) {
    console.log(this.data)
  }

  save(){

  }

  close(): void {
    this.dialogRef.close();
  }
}