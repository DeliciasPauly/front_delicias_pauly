import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { BannersComponent } from './banners/banners.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ProductsComponent, PricesComponent, ContactComponent, BannersComponent, ServicesComponent],
  imports: [
    CommonModule
  ]
})
export class FrontPageModule { }
