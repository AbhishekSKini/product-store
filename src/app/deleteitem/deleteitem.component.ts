import { Component, OnInit } from '@angular/core';
import { ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.sass']
})
export class DeleteitemComponent implements OnInit {
posts;
  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
   
  }

  
}
