import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from "../services/book.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  // styles: ['h1 { font-weight: normal; }',
  //          '.book-list-table {border: 1px solid black; }',
  //         ]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  cartIsDisplayed = false;
  bookFormDisplayed = false;

  constructor(private bookService : BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      data => this.books = data
    );
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book).subscribe(data => {
      console.log(`book ${book.id} deleted`);
      console.log(data);
      this.ngOnInit();
    });
  }

  toggleCart() {
    this.cartIsDisplayed = !this.cartIsDisplayed;
  }

  react() {
    console.log("Book list is reacting!");
  }

  toggleBookForm() {
    this.bookFormDisplayed = !this.bookFormDisplayed;
  }
}
