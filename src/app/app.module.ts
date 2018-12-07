import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FrontPageModule } from './modules/front-page/front-page.module';
import { BannersComponent } from './modules/front-page/banners/banners.component';
import { ServicesComponent } from './modules/front-page/services/services.component';
import { ProductsComponent } from './modules/front-page/products/products.component';
import { PricesComponent } from './modules/front-page/prices/prices.component';
import { ContactComponent } from './modules/front-page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    BrowserAnimationsModule,
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent,BannersComponent,ServicesComponent,ProductsComponent,PricesComponent,ContactComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
