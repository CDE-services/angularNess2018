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
    this.books = this.bookService.getBooks();
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
