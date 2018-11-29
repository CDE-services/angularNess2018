export class Score {
  player: string;
  points: number;
  playedOn: Date;

  constructor(player: string, points: number, playedOn: Date) {
    this.player = player;
    this.points = points;
    this.playedOn = playedOn;
  }
}
