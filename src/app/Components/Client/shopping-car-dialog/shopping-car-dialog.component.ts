import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import {StoreService } from '../../../Services/store.service'

@Component({
  selector: 'app-shopping-car-dialog',
  templateUrl: './shopping-car-dialog.component.html',
  styleUrls: ['./shopping-car-dialog.component.css']
})
export class ShoppingCarDialogComponent {
  AddCartsProducts : Array<Product> = []
constructor(private storeService : StoreService){

 
}
ngOnInit() {
  this.GetProductCart()
  }

  GetProductCart(){
    this.storeService.myCart$.subscribe(Products =>{
     this.AddCartsProducts = Products
     console.log("products carros", this.AddCartsProducts)
    })
  }

}
