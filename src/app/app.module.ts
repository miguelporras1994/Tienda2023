import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent }  from './Components/header/header.component'
import { SearchComponent }  from './Components/search/search.component'
import { ProductComponent } from './Components/Admin/product/product.component';
import { ProductDialogComponent } from './Components/Admin/product-dialog/product-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatSelectModule} from '@angular/material/select';
import { ProductsComponent } from './Components/Client/products/products.component';
import { ProductClientComponent } from './Components/Client/product-client/product-client.component';
import { HomeCLientComponent } from './Components/Client/home-client/home-client.component';
import { ShoppingCarDialogComponent } from './Components/Client/shopping-car-dialog/shopping-car-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProductComponent,
    ProductDialogComponent,
    ProductsComponent,
    ProductClientComponent,
    HomeCLientComponent,
    ShoppingCarDialogComponent,
  
   
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule ,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatSelectModule

   
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
