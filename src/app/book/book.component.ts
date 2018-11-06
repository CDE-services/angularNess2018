import { Component } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  id: number = 1;
  title: string = 'Robots and the Empire';
  author: string = 'Isaac Asimov';
  description: string = 'Isaac Asmiov\'s classic novel about the decline and fall of Solaria. Gladia Delmarre\'s homeworld, the Spacer planet Solaria, has been abandoned - by its human population. Countless robots remain there. And when traders from Settler worlds attempt to salvage them, the robots of Solaria turn to killing...in defiance of the Three Laws of Robotics. Pax Robotica Long ago, Gladia\'s robots Daneel and Giskard played a vital role in opening the worlds beyond the Solar system to Settlers from Earth. Now the conscience-stricken robots are faced with an even greater challenge.';
  imageUrl: string = 'https://images-na.ssl-images-amazon.com/images/I/51as%2B9goe9L._SX310_BO1,204,203,200_.jpg';

  constructor() { }
}
