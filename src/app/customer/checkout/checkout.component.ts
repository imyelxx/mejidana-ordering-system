import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  itemQty: number = 1;
  
  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, ),
  })
  
  constructor(public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, /** to use for you to access the data */
  ) {
    console.log(this.data)
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.formGroup)
    console.log(this.formGroup.value)
  }

  close(): void {
    this.dialogRef.close();
  }

}
