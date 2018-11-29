import {Component, OnInit} from '@angular/core';
import {Field} from './core/field';
import {GameState} from './core/game-state';
import {ScoreService} from '../services/score.service';
import {Score} from '../services/score.model';

@Component({
  selector: 'mines',
  templateUrl: 'mines.component.html',
  styleUrls: ['mines.component.css'],
  providers: [ScoreService]
})

export class MinesComponent implements OnInit {
  private field : Field = new Field(10, 10, 1);
  private readonly gameState = GameState; //this has to be here so we could use the enum in the HTML template
  private scores: Score[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scores = this.scoreService.getScores();
  }

  newGame() : void {
    this.field = new Field(10, 10, 10);
  }
}
