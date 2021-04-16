import { Component, OnInit } from '@angular/core';

import {ProductserviceService} from  '../productservice.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.sass']
})
export class ProductlistingComponent implements OnInit {
products:any=[];
loading=true;
posts;

  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
    
    this.productservice.getProducts()
    .subscribe(res=>{
      this.products=res;
      if(res){
       this.loading=false;
      }
     
    },err=>{
      console.log(err)
    })
  }
 hideloader() {
  
    // Setting display of spinner
    // element to none
    document.getElementById('loading')
        .style.display = 'none';
}

deleteItem(post){
  if( confirm("Are you sure to delete the item"))
  {

  
  this.productservice.deletePost(post.id).subscribe(()=>{this.ngOnInit()});
      // .subscribe(response => {
  //       this.posts = this.posts.filter(item => {return item.id !== post.id } );
     
  //  console.log(this.posts);

    
    
      // });

      

      
}
}
}
