import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { Category } from '../Models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private Http : HttpClient) { }

 private ApiUrl ='https://localhost:7173/Api/Category'
//  private ApiUrl  = 'https://apitienda.azurewebsites.net/Api/Category'

  Getall(){
  
   var prueba =  this.Http.get<Category[]>(this.ApiUrl)
     console.log("prueba", prueba)
     return prueba
  }


    Create(data : Category){
    
      return this.Http.post<Category>(this.ApiUrl, data)

  }


  Edit(data : Category){
    return this.Http.put(this.ApiUrl , data)
  }

  Delete (Id : number){
    return this.Http.delete(`${this.ApiUrl}/${Id}`)
  }

}