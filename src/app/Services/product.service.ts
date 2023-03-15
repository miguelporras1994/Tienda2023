import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http : HttpClient) { }

 private ApiUrl ='https://localhost:7173/Api/Product'

  GetallProduct(){
  
   var prueba =  this.Http.get<Product[]>(this.ApiUrl)
     console.log("prueba", prueba)
     return prueba
  }


    Create(data : Product){
    
      return this.Http.post<Product>(this.ApiUrl, data)

  }


  Edit(data : Product){
    return this.Http.put(`${this.ApiUrl}/${data.idProduct}` , data)
  }

  Delete (Id : number){
    return this.Http.delete(`${this.ApiUrl}/${Id}`)
  }

  //  async  Delete  ( Id : number){
  //   var Res: ResponseData;
  //   await this.Http.delete(`${this.ApiUrl}/${Id}`).((res: any) => {

  //       Res = res

  //   });
  //   return Res;
  // }
  
  
}
