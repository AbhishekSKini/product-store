import { Component, OnInit } from '@angular/core';

import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {ProductserviceService} from  '../productservice.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.sass']
})

export class AddtocartComponent implements OnInit {
  products:any=[];
  loading=true;
  profileForm = new FormGroup({
  title: new FormControl('',Validators.required),
   description: new FormControl('',Validators.required),
   imageUrl: new FormControl('',Validators.required)
  });
  constructor(private ps: ProductserviceService , private router:Router) { }

  ngOnInit(): void {
    this.ps.getProducts()
    .subscribe(res=>{
      this.products=res;
      if(res){
       this.loading=false;
      }
     
    },err=>{
      console.log(err)
    })
  }
 
getproduct(){
 
}

  addproduct(){
    
    console.log(this.profileForm.value);
    this.ps.postproduct(this.profileForm.value);
    alert("Form Submitted!");
    this.router.navigate(['/']);
 
    
  }

}
