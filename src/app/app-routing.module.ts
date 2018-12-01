import {BookListComponent} from './book-list/book-list.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {BookComponent} from './book/book.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {BookFormComponent} from "./book-form/book-form.component";

@NgModule({
  imports: [
    RouterModule.forRoot([{
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: 'books/add',
        component: BookFormComponent,
      },
      {
        path: 'books/:id',
        component: BookComponent,
      },
      {
        path: 'authors',
        component: AuthorListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}


//Child roots priklad:

let childRootsExample = [{
      path: '',
      redirectTo: 'books',
      pathMatch: 'full'
    },
      {
        path: 'books',
        component: BookListComponent,
        children: [
          {
            path: '',
            redirectTo: 'books',
            pathMatch: 'full'
          },
          {
            path: ':id',
            component: BookComponent,
          },
          {
            path: 'add',
            component: BookFormComponent,
          },
        ]
      },
      {
        path: 'authors',
        component: AuthorListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ];
