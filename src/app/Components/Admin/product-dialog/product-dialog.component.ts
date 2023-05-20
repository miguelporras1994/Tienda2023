import { Component, OnInit , Input, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/Models/Product.model';
import {ProductService} from '../../../Services/product.service'
import {CategoryService} from '../../../Services/category.services'

import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/Models/Category.model';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent   {

  cProduct : Product  = new Product();
  ListCategory : Category[]   = []

  edit : boolean = false

  //  @Inject(MAT_DIALOG_DATA) public data: Product = new Product();
  // @Input() Product: Product  = new Product()


  constructor(
    private productService :  ProductService ,
    private categoryService : CategoryService,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: Product 
   ){


  }
  ngOnInit(): void {
   
    this.getCategory()
    if(this.data != null ){
      this.edit = true
   

    this.cProduct = this.data
    
    }
  }
  
  eventForm(){
  if(this.edit == false ){
    this.CreateProduct()
  }else {
  this.editProduct()
  }
  }

  CreateProduct(){
    this.spinner.show();
    console.log("producto", this.cProduct)
    this.productService.Create(this.cProduct).subscribe(data => {

      this.spinner.hide();
      this.dialogRef.close();
    })
  }


  editProduct(){
     this.spinner.show()
     console.log("producto edit", this.cProduct)
    this.productService.Edit(this.cProduct).subscribe(data =>{
      this.cProduct = new Product()
      this.spinner.hide()
      this.dialogRef.close()
    })

  }


  getCategory(){
   this.categoryService.Getall().subscribe(data =>{ 
   this.ListCategory = data;


   console.log("Category", this.ListCategory)


   })
  }


}
