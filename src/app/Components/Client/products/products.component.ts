import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { StoreService } from 'src/app/Services/store.service';

import {ProductService} from '../../../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  CartsProducts : Array<Product> = []
  Products : Array<Product> = []
  total : number = 0
 constructor( private  productService : ProductService  , private  storeService : StoreService){

 }

 ngOnInit() {
  this.GetProducts();
  }

  ngAfterViewInit(){
    this.GetProducts();
  }
   

  GetProducts(){
    // this.spinner.show();
    this.productService.GetallProduct().subscribe( Data => {
        
      this.Products = Data
      console.log("products1" , this.Products )
  
     
    })
  }


  cartstore(event: Product) {

    this.storeService.AddStoreCar(event)
   this.CartsProducts  =this.storeService.getStoreCar()

   console.log("cars products", this.CartsProducts)
    
 
   this.total = this.storeService.TotalProduct()
   console.log("total", this.total)
    
  }
}
