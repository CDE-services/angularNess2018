import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../model/book.model';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: Book[]): Book[] {
    return value.filter(b => b.reserved == false);
  }

}
