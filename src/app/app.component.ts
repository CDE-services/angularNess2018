import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `
    <div>
      <h1>This is my {{title}} app!</h1>
      <h2>Welcome!</h2>
    </div>
    <books></books>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOOKS STORE';
}
