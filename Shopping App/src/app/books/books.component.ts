import { Component ,OnInit } from '@angular/core';
import { Book } from '../Interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[]=[];

  constructor( private booksSevice:BooksService) { 
  }

  ngOnInit(): void {
    this.books=this.booksSevice.getBooks();
  }

  isShowing:boolean=true;
 
  // addToCart(event:Book){
  //   console.log(event)
  // }

}
