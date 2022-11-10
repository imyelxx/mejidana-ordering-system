import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  
  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    stock: new FormControl(null, [Validators.required]),
  })
  
  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, /** to use for you to access the data */
  ) {
    console.log(this.data)
  }

  ngOnInit(): void {
    if(this.data.product)
      this.setValue(this.data.product)
  }

  setValue(data: any){
    this.formGroup.controls.name.setValue(data?.productName)
    this.formGroup.controls.details.setValue(data?.productDescription)
    this.formGroup.controls.price.setValue(data?.stock)
    this.formGroup.controls.stock.setValue(data?.price)
  }

  save(){

  }

  close(): void {
    this.dialogRef.close();
  }

}
