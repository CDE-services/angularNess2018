import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Clue, Mine, Tile} from './core/tile';
import {TileState} from './core/tile-state';

@Component({
  selector: 'tile',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.css']
})
export class TileComponent {
  @Input() tile: Tile = new Mine();
  @Output() openTileEvent : EventEmitter<void>
                            = new EventEmitter<void>();
  @Output() markTileEvent : EventEmitter<void>
                            = new EventEmitter<void>();

  readonly IMAGE_PATH: string = 'assets/images/minesweeper';

  getStyle(): any {
    let figName = (this.tile.state === TileState.CLOSED) ? 'closed' : 'marked';
    if (this.tile.state === TileState.OPEN) {
      if (this.tile.constructor.name === 'Clue') { //Namiesto Java instanceof. TS operator typeof vrati object, takze musime ist cez toto.
        figName = 'open' + (<Clue> this.tile).value; //<Clue> je pretypovanie
      } else {
        figName = 'mine';
      }
    }
    return {
      background: `url(${this.IMAGE_PATH}/${figName}.png)`
    }
  }

  leftButtonWasClicked(event : MouseEvent): void {
    this.openTileEvent.emit();
  }

  rightButtonWasClicked(event : MouseEvent) : void {
    event.preventDefault();
    this.markTileEvent.emit();
  }
}
