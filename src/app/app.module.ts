import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SerachComponent } from './serach/serach.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductddetailsComponent } from './productddetails/productddetails.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SerachComponent,
    ProductlistingComponent,
    ProductddetailsComponent,
    AddtocartComponent,
    DeleteitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
