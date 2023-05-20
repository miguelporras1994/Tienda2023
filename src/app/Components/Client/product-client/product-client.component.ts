import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';


@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent {

  @Input() product: Product  = new Product()
  @Output() CartProducts  =  new EventEmitter<Product>()




AddCartProduct( AddProduct : Product  ){
  this.CartProducts.emit(AddProduct)
}
}