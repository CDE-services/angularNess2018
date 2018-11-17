import {TileState} from "./tile-state";

export class Tile {
    // public state: TileState = TileState.OPEN;
    public state: TileState = TileState.CLOSED; //todo: uncomment after implementation
}

export class Mine extends Tile { }

export class Clue extends Tile {
    constructor(public readonly value : number) {
        super();
        this.value = value;
    }
}
