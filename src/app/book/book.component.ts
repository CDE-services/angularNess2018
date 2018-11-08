import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imageWidth = 100;

  book : Book = new Book(
  1,
  'Robots and the Empire',
  'Isaac Asimov',
  'Isaac Asmiov\'s classic novel about the decline and fall of Solaria. Gladia Delmarre\'s homeworld, the Spacer planet Solaria, has been abandoned - by its human population. Countless robots remain there. And when traders from Settler worlds attempt to salvage them, the robots of Solaria turn to killing...in defiance of the Three Laws of Robotics. Pax Robotica Long ago, Gladia\'s robots Daneel and Giskard played a vital role in opening the worlds beyond the Solar system to Settlers from Earth. Now the conscience-stricken robots are faced with an even greater challenge.',
  'https://images-na.ssl-images-amazon.com/images/I/51as%2B9goe9L._SX310_BO1,204,203,200_.jpg',
  false
  );

  getClasses() {
    return {
      reservedBook: this.book.reserved,
      withoutImage: !this.book.imageUrl
    }
  }

  ngOnInit(): void {
    setTimeout(()=> {
      this.book.reserved = true;
    }, 5000);
    setTimeout(()=> {
      this.book.imageUrl= '';
    }, 7000);
  }
}
