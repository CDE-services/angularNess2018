import { Component, OnInit } from '@angular/core';
import {Author, Gender} from '../model/author.model';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  genderEnum = Gender; //referencia na enum pre pouzitie v HTML sablone

  authors: Author[] = [
    new Author('Isaac', 'Asimov',
      new Date(1920, 0, 2),
      new Date(1992, 3, 6),
      'https://encyklopediapoznania.sk/data/osobnosti_obrazky/asimov_isaac.png',
      Gender.MALE),
    new Author('Arthur C.', 'Clarke',
      new Date(1917, 11,16),
      new Date(2008,2,19),
      'https://abjjadst.blob.core.windows.net/pub/8a7d7f54-2974-4167-a81a-7e06885c11d3-250X250.png',
      Gender.MALE),
    new Author('Joanne K.', 'Rowling',
      new Date(1965,6,31),
      null,
      'http://www.gstatic.com/tv/thumb/persons/174909/174909_v9_ba.jpg'),
  ];
}
