export class Book {
  id: number = 1;
  title: string = 'Robots and the Empire';
  author: string = 'Isaac Asimov';
  description: string = 'Isaac Asmiov\'s classic novel about the decline and fall of Solaria. Gladia Delmarre\'s homeworld, the Spacer planet Solaria, has been abandoned - by its human population. Countless robots remain there. And when traders from Settler worlds attempt to salvage them, the robots of Solaria turn to killing...in defiance of the Three Laws of Robotics. Pax Robotica Long ago, Gladia\'s robots Daneel and Giskard played a vital role in opening the worlds beyond the Solar system to Settlers from Earth. Now the conscience-stricken robots are faced with an even greater challenge.';
  imageUrl: string = 'https://images-na.ssl-images-amazon.com/images/I/51as%2B9goe9L._SX310_BO1,204,203,200_.jpg';
  reserved: boolean = false;
  price: number = 0;
  genre: string;
  rating: number;

  public constructor(
    id: number, title: string, author: string,
    description: string, imageUrl: string,
    reserved: boolean, price: number,
    genre: string = "",
    rating: number = 0
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.imageUrl = imageUrl;
    this.reserved = reserved;
    this.price = price;
    this.genre = genre;
    this.rating = rating;
  }
}

export class Genre {
  name: string;

  public constructor(name : string) {
    this.name = name;
  }
}
