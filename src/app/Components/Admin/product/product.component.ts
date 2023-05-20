
import {  AfterViewInit, Component, ViewChild} from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import {ProductService} from '../../../Services/product.service'
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../Admin/product-dialog/product-dialog.component';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  Product : Array<Product> = []
  displayedColumns: string[] = ['idProduct', 'nameProduct', 'price', 'discretion',  'idCategory',  'actions'];
  dataSource: MatTableDataSource<Product>  = new   MatTableDataSource<Product>

  // @ViewChild(MatPaginator, { static: false })
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort; 

  register  = {
    name :'',
   }

constructor(
     private productService :  ProductService ,
     public dialog: MatDialog,
     private spinner: NgxSpinnerService
    ){


}


  ngOnInit() {
  this.GetProducts();
  }

  GetProducts(){
    this.spinner.show();
    this.productService.GetallProduct().subscribe( Data => {
 
      this.Product = Data
  
      this.dataSource = new MatTableDataSource(this.Product);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
    })
   
  }

ngAfterViewInit() {
  
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}





  deleteProduct(Id : number){
  var res : any;
  Swal.fire({
    title: "Desea eliminar el producto",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No",
    cancelButtonText: "No",
    preConfirm:async ()  => {
  this.productService.Delete(Id).subscribe(data => {
        // this.GetProducts();
     

         Swal.fire({
          icon: 'success',
          title: "Producto fue eliminado",
          showConfirmButton: false,
          timer: 2000
        })
        this.GetProducts();
    
      })

      if (res.head.status.toLowerCase() == 'true') {
        await Swal.fire({
          icon: 'success',
          title: "Producto fue eliminado",
          showConfirmButton: false,
          timer: 2000
        })

      }
      else {
        await Swal.fire(

          'Error!',

          res.head.error.description,

          'error'

        )
      }
      await this.GetProducts();

    }
  })


}


async editProduct(product: Product ) {
  const dialogRef = this.dialog.open(ProductDialogComponent, {
    width: '80%',
    height:'90%',
    data: product,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === "confirmed") {
      // this.route.navigate(['booking/confirmation']);
      this.GetProducts();
    }
  });
}


createProduct(){
  const dialogRef = this.dialog.open(ProductDialogComponent, {
    width: '80%',
    height:'90%',
  
  });
  dialogRef.afterClosed().subscribe(result => {
    // if (result === "confirmed") {
      // this.route.navigate(['booking/confirmation']);
      this.GetProducts();
    // }
  });
}







}







