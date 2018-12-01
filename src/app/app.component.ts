import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `
    <!--<input [value]="text"-->
           <!--(input)="doTextInput($event.target.value)">-->

    <!--<input [(ngModel)]="text">-->
    <!--<input (input)="doTextInput($event.target.value)">-->
    <!--{{text}}-->
    <!---->
    <my-header></my-header>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "ahoj";

  doTextInput(value) : void {
    this.text = value;
  }
}
