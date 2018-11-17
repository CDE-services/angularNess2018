import {Component} from '@angular/core';
import {Field} from './core/field';
import {GameState} from './core/game-state';

@Component({
  selector: 'mines',
  templateUrl: 'mines.component.html',
  styleUrls: ['mines.component.css']
})

export class MinesComponent {
  private field : Field = new Field(10, 10, 1);
  private readonly gameState = GameState; //this has to be here so we could use the enum in the HTML template

  newGame() : void {
    this.field = new Field(10, 10, 10);
  }
}
