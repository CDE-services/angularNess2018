import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `
    <input [value]="text"
           (input)="doTextInput($event.target.value)">
    {{text}}
    
    <my-header></my-header>
    <book-list></book-list>
    <author-list></author-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "ahoj";

  doTextInput(value) : void {
    this.text = value;
  }
}
