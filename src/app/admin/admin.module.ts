import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ProductDialogComponent } from './product-management/product-dialog/product-dialog.component';
import { MaterialExampleModule } from '../shared/material.module';
import { MockProductService } from '../shared/mock/mock-product-service';
import { ConvertToSpacesPipePipe } from '../shared/pipes/convert-to-spaces-pipe.pipe';



@NgModule({
  declarations: [
    ProductManagementComponent,
    OrderManagementComponent,
    ProductDialogComponent,
    ConvertToSpacesPipePipe
  ],
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  providers: [
    MockProductService
  ]
})
export class AdminModule { }
