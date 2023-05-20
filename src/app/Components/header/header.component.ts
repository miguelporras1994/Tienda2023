import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Models/Product.model';
import {ProductService} from '../../Services/product.service'
import {ShoppingCarDialogComponent} from '../Client/shopping-car-dialog/shopping-car-dialog.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 constructor(public dialog: MatDialog,){
  
 }


 ngOnInit() {
  
}

openShoppingCar(){

  const dialogRef = this.dialog.open(ShoppingCarDialogComponent, {
    width: '80%',
    height:'90%',
  
  });
  dialogRef.afterClosed().subscribe(result => {
    // if (result === "confirmed") {
      // this.route.navigate(['booking/confirmation']);
      // this.GetProducts();
    // }
  });

}
 
}
