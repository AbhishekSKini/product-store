import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { ProductddetailsComponent } from './productddetails/productddetails.component';
import {ProductlistingComponent} from './productlisting/productlisting.component';

const routes:Routes= [
  {​​​​​​​​path: '', component: ProductlistingComponent}​​​​​​​​,
  {​​​​​​​​path: 'product/:id', component: ProductddetailsComponent}​​​​​​​​,
  {
    path:'addtocart', component:AddtocartComponent
  }
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

 



}
