import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating = 0;
  @Output() onRatingChanged: EventEmitter<number>
    = new EventEmitter<number>();

  setRating(numStars: number) : void {
    this.rating = numStars;
    this.onRatingChanged.emit(this.rating);
  }
}
