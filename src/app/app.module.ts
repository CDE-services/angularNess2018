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
import { StarComponent } from './star/star.component';
import {AppRoutingModule} from "./app-routing.module";
import {BookService} from "./services/book.service";
import {CartComponent} from "./cart/cart.component";


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    AuthorComponent,
    AuthorListComponent,
    HeaderComponent,
    BookFormComponent,
    CartComponent,

    ExponentialStrengthPipe,
    BookFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
