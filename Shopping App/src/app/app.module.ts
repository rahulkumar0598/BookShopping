import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart/cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BooksModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
