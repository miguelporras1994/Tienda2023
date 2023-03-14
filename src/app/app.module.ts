import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent }  from './Components/header/header.component'
import { SearchComponent }  from './Components/search/search.component'
import { ProductComponent } from './Components/product/product.component';
import { ProductDialogComponent } from './Components/product-dialog/product-dialog.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProductComponent,
    ProductDialogComponent,
   
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
    NgxSpinnerModule
   
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
