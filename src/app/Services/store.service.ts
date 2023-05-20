import { Injectable } from '@angular/core';
import { Product } from '../Models/Product.model';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  CartsProducts : Array<Product> = []
  total : number = 0
  private myCart = new  BehaviorSubject<Product[]>([]);


  myCart$ = this.myCart.asObservable();


  constructor() { }

  getStoreCar(){
    return this.CartsProducts
  }

  AddStoreCar(event: Product){
    this.CartsProducts.push(event)
    this.myCart.next(this.CartsProducts)
  }


  TotalProduct(){
    return   this.total = this.CartsProducts.reduce((sum , item) => sum  + item.price , 0)
  }
  

}



