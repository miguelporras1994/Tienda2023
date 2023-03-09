import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import {ProductService} from '../../Services/product.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(private productService : ProductService){

 }


 ngOnInit() {
  
}
 
}
