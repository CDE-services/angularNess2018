import {Book} from '../model/book.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class BookService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) {}

  public getBook(id: number): Observable<Book> {
    return this.http.get<Book>(
      `${this.booksUrl}/${id}`);
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  public addBook(book: Book): Observable<Book> {
    delete book.id; //generate automatically

    return this.http.post<Book>(this.booksUrl,
                    book, this.httpOptions).pipe(
      tap((book: Book) => console.log(
        `added book w/ id=${book.id}`)),
      catchError(err => of("chyba " + err))
    );

  }

  public deleteBook(book: Book): Observable<any> {
    return this.http.delete(
      `${this.booksUrl}/${book.id}`,
      this.httpOptions);
  }
}
