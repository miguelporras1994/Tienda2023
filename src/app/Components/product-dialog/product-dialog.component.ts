import { Component, OnInit , Input, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/Models/Product.model';
import {ProductService} from '../../Services/product.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent  implements OnInit {

  cProduct : Product  = new Product();

  edit : boolean = false

  //  @Inject(MAT_DIALOG_DATA) public data: Product = new Product();
  // @Input() Product: Product  = new Product()


  constructor(
    private productService :  ProductService ,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: Product 
   ){


  }
  ngOnInit(): void {
   
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
    this.productService.Create(this.cProduct).subscribe(data => {

      this.spinner.hide();
      this.dialogRef.close();
    })
  }


  editProduct(){
     this.spinner.show()
    this.productService.Edit(this.cProduct).subscribe(data =>{
      this.cProduct = new Product()
      this.spinner.hide()
      this.dialogRef.close()
    })

  }



}
