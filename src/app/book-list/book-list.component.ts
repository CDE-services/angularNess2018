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
    new Book(1, 'Robots and the Empire', 'Isaac Asimov', '', '', true),
    new Book(2, 'I, Robot', 'Isaac Asimov', '', '', true),
    new Book(3, 'The Naked Sun', 'Isaac Asimov', '', '', false),
  ];
}
