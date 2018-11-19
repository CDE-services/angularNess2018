import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book, Genre} from '../model/book.model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() book : Book = new Book(-1,'','','','',false, 0, new Genre(""));
  // formBook : Book = new Book(-1,'','','','',false, 0);

  genres : Genre[] = [
    new Genre("sci-fi"),
    new Genre("romance"),
    new Genre("thriller"),
    new Genre("fantasy")
  ];

  getBookToString(): string {
    return JSON.stringify(this.book);
  }
}
