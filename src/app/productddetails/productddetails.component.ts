import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-productddetails',
  templateUrl: './productddetails.component.html',
  styleUrls: ['./productddetails.component.sass']
})
export class ProductddetailsComponent implements OnInit {

  product : any=null;
  loading=true;
 
  constructor(private productservice : ProductserviceService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productservice.getProductsdetails(params.id)
      .subscribe(res=>{
        this.product=res;
        console.log(this.product);
        if(res){
          this.loading=false;
         }
         
      })
    })
    }
   
  }


