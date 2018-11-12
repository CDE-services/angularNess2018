import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `
    <my-header></my-header>
    <book-list></book-list>
    <author-list></author-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
