import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return[
      {
        name:"Clean Code",
        author:"Robert C Martin",
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41SH-SvWPxL.jpg",
        amount:"800",
        
      },
      {
        name:'Pragmatic Programmer',
        author:"David Thomas",
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg",
        amount:"800",

      },
      {
        name:"Art of Computer Programming",
        author:"Donald John Fuller",
        image:"https://th.bing.com/th/id/OIP.Q_15NpIW6yMqXWFnRhx_cwHaGY?pid=ImgDet&rs=1",
        amount:"700"
      },
      {
        name:"Introduction to Algorithm ",
        author:"T Cormen",
        image:"https://th.bing.com/th/id/OIP.Wo_5BaHe73KmGAu137MV0AHaIr?w=147&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        amount:"750"

      }
    ];
  }
}
