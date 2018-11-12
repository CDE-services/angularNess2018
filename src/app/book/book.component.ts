import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imageWidth = 100;

  @Input() book : Book = new Book(-1,'','','','',false);

  getClasses() {
    return {
      reservedBook: this.book.reserved,
      withoutImage: !this.book.imageUrl
    }
  }

  ngOnInit(): void {
    //pockame 5 ms a potom zmenime reserved na true
    // setTimeout(()=> {
    //   this.book.reserved = true;
    // }, 5000);
    //pockame 7 ms a potom zmenime imageUrl na nic
    // setTimeout(()=> {
    //   this.book.imageUrl= '';
    // }, 7000);
  }
}
