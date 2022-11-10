import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer-module.module';
import { HeaderComponent } from './header/header.component';
import { ConvertToSpacesPipePipe } from './shared/pipes/convert-to-spaces-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    // FlexLayoutModule, //npm i @angular/flex-layout
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
