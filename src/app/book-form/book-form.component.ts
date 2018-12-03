import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book, Genre} from '../model/book.model';
import {Router} from '@angular/router';
import {BookService} from "../services/book.service";

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent
  implements OnInit, OnChanges {
  @Input() book : Book = new Book(-1,'','','','',false, 0);

  constructor(private bookService: BookService,
              private router: Router
              ) {}

  genres : Genre[] = [
    new Genre("sci-fi"),
    new Genre("romance"),
    new Genre("thriller"),
    new Genre("fantasy")
  ];

  //nesmie byt private, to bolo chybne
  constructor() {
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
    this.bookService.addBook(this.book).subscribe((data) => {
      this.router.navigate(
        ["/books", data.id]
      );
    });
  }
}
