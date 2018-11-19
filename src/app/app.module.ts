import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { HeaderComponent } from './header/header.component';
import { ExponentialStrengthPipe } from './shared/exponentialStrength.pipe';
import { BookFilterPipe } from './book-list/bookFilter.pipe';
import {BookFormComponent} from './book-form/book-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    AuthorComponent,
    AuthorListComponent,
    HeaderComponent,
    BookFormComponent,

    ExponentialStrengthPipe,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
