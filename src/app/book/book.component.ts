import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from "../services/book.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imageWidth = 100;

  book : Book = new Book(-1,'','','','',false, 0, '');
  @Output() mojKlik: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private bookService : BookService,
    private activatedRoute : ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
      //activatedRoute.params je Observable, takze
      //sa musime nanho subscribnut a tak
      //dostat dane parametre
      //(az ked budu k dispozicii od browsera)
      this.activatedRoute.params.subscribe(
      params => {
        let param = params["id"];
        let b = this.bookService.getBook(param);
        if(b != null) {
          this.book = b;
        }
      }
    );


    // pockame 5 ms a potom zmenime reserved na true
    // setTimeout(()=> {
    //   this.book.reserved = true;
    // }, 5000);
    //pockame 7 ms a potom zmenime imageUrl na nic
    // setTimeout(()=> {
    //   this.book.imageUrl= '';
    // }, 7000);

    // setTimeout(()=> {
    //   console.log(`kniha ${this.book.title} robi notify`);
    // }, 5000);
  }

  getClasses() {
    return {
      reservedBook: this.book.reserved,
      withoutImage: !this.book.imageUrl
    }
  }

  emitSomething() {
    this.mojKlik.emit("value changed");
    console.log(`kniha ${this.book.title} robi notify`);
  }

  goBack(): void {
    this.location.back();
  }
}
