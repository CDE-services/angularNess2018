import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book, Genre} from '../model/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent
  implements OnInit, OnChanges {
  @Input() book : Book;
  // formBook : Book = new Book(-1,'','','','',false, 0);

  genres : Genre[] = [
    new Genre("sci-fi"),
    new Genre("romance"),
    new Genre("thriller"),
    new Genre("fantasy")
  ];

  private constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    this.book = new Book(-1,'','','','',false, 0, "");
    console.log("init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  getBookToString(): string {
    return JSON.stringify(this.book);
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log("SUBMIT");
  }

}
