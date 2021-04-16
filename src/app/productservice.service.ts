import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  postId;
  private baseUrl ='https://sheltered-springs-67444.herokuapp.com/product';
  constructor(private http: HttpClient,private router:Router) { }

  getProducts(){
    return this.http.get(this.baseUrl);
  }
  getProductsdetails(id){
    return this.http.get(this.baseUrl+'/'+id);
  }

  postproduct(entrydata){
    this.http.post<any>(this.baseUrl, entrydata).subscribe(data => {
        this.postId = data.id;
        console.log(entrydata);
    })
  
  }
  deletePost(id){
    return this.http.delete(this.baseUrl+'/'+id);
   
   
  }
  

}
