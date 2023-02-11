import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Book } from '../Interface/Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private cartService:CartService,private authService:AuthService) { }
  isInCart:boolean=false;
  ngOnInit(): void {
    
  }
  @Input() book:Book={} as Book

  // @Output() eventEmitter=new EventEmitter
  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.book);
      // this.eventEmitter.emit(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
  isAuthenciated(){
    return this.authService.isAuthenticated;
  }
  
  
}
