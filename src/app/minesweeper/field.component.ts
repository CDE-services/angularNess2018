import {Component, Input} from '@angular/core';
import {Field} from './core/field';
import {GameState} from './core/game-state';
import {ScoreService} from '../services/score.service';

@Component({
  selector: 'field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css'],
  // providers: [ScoreService]
})
export class FieldComponent {
  @Input() field : Field = new Field(10, 9, 8);

  constructor(private scoreService: ScoreService) {}

  checkIfWin(): void {
    if(this.field.state == GameState.SOLVED) {
      this.scoreService.addScore(
        "mishela",
        this.field.getScore()
      );
    }
  }
}
