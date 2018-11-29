import { Injectable } from '@angular/core';
import {Score} from './score.model';

// @Injectable({
//   providedIn: 'root'
// })
export class ScoreService {
  private scores: Score[] = [
    new Score("miska", 120, new Date()),
    new Score("petko", 200, new Date())
  ];

  public getScores(): Score[] {
    return this.scores;
  }

  public addScore(player: string, points: number) {
    this.scores.push(new Score(player, points, new Date()));
  }
}
