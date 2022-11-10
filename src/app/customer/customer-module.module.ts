import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsDialog, ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { MaterialExampleModule } from '../shared/material.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductCatalogComponent,
    ProductDetailsComponent,
    CheckoutComponent, //Entry Component
    OrderDetailsDialog //Entry Component
  ],
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  entryComponents: [
    CheckoutComponent, //Entry Component
    OrderDetailsDialog //Entry Component
  ]
})
export class CustomerModule { }
