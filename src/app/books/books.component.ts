import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  // styles: ['h1 { font-weight: normal; }',
  //          '.books-table {border: 1px solid black; }',
  //         ]
})
export class BooksComponent {
  books : Book[] = [
    new Book(1, 'Robots and the Empire', 'Isaac Asimov', '', '', true),
    new Book(2, 'I, Robot', 'Isaac Asimov', '', '', true),
    new Book(3, 'The Naked Sun', 'Isaac Asimov', '', '', false),
    new Book(1, 'Robots and the Empire', 'Isaac Asimov', '', '', false),
    new Book(2, 'I, Robot', 'Isaac Asimov', '', '', true),
    new Book(3, 'The Naked Sun', 'Isaac Asimov', '', '', false),
    new Book(1, 'Robots and the Empire', 'Isaac Asimov', '', '', true),
    new Book(2, 'I, Robot', 'Isaac Asimov', '', '', true),
    new Book(3, 'The Naked Sun', 'Isaac Asimov', '', '', false)
  ];
}
