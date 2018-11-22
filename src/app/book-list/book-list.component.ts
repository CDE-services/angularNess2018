import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  // styles: ['h1 { font-weight: normal; }',
  //          '.book-list-table {border: 1px solid black; }',
  //         ]
})
export class BookListComponent {
  books : Book[] = [
    new Book(1, 'Robots and the Empire', 'Isaac Asimov', 'Robots and Empire is a 1985 science-fiction novel written by Isaac Asimov. It is part of the Robot Series. The main scope of this book is to reconcile two of Asimov\'s main series, the Robot series and the Empire series (continued later in the The Foundation Series series). That is, to understand the transition from a mixed humanity-robot universe, dominated by the increasingly robotic societies of the Spacer Worlds, to a human-only Galactic Empire.', 'https://images-na.ssl-images-amazon.com/images/I/51as%2B9goe9L._SX310_BO1,204,203,200_.jpg', true, 10.5),
    new Book(2, 'I, Robot', 'Isaac Asimov', 'I, Robot is a science-fiction novel by Isaac Asimov. It is a collection of nine short stories that originally appeared in the magazines Super Science Stories and Astounding Science Fiction between 1940 and 1950, and were then woven together into novel form and published by Gnome Press in 1950.', 'https://images-na.ssl-images-amazon.com/images/I/51as%2B9goe9L._SX310_BO1,204,203,200_.jpg', true, 6.8, ),
    new Book(3, 'The Naked Sun', 'Isaac Asimov', 'The Naked Sun is a science-fiction novel by Isaac Asimov, the second in his Robot series. Like its predecessor, The Caves of Steel, it is also a whodunit story. The book was first published in 1957 after being serialized in Astounding Science Fiction from October to December 1956.', 'https://images-na.ssl-images-amazon.com/images/I/91xFG5EyEcL.jpg', false, 9.345, "thriller", 4),
  ];

  cartIsDisplayed = false;
  bookFormDisplayed = false;

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
