import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../model/book.model';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[]): Book[] {
    return books.filter(b => b.reserved == false);
  }

}
