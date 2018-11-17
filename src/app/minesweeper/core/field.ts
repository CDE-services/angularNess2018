import {GameState} from "./game-state";

import {Clue, Mine, Tile} from './tile';
import {TileState} from './tile-state';
import {Random} from '../../shared/random';

export const GAME_NAME : string = "mines-bacikova";

export class Field {

    public readonly tiles: Tile[][];

    state: GameState = GameState.PLAYING;

    private startMillis: number;

    public readonly rowCount : number;
    public readonly columnCount : number;
    public readonly mineCount : number;

    constructor(rowCount: number = 10, columnCount: number = 10, mineCount: number = 10) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.mineCount = mineCount;

        this.tiles = new Array(this.rowCount);
        for(let row : number = 0; row < this.rowCount; row++) {
            this.tiles[row] = new Array(this.columnCount);
        }

        this.generate();
    }

    public generate(): void {
        this.state = GameState.PLAYING;

        this.generateMines();
        this.fillWithClues();
        this.startMillis = new Date().getMilliseconds();
    }

    private generateMines(): void {
        const random: Random = new Random();
        let minesToSet: number = this.mineCount;

        while (minesToSet > 0) {
            let row: number = random.next(this.rowCount - 1);
            let col: number = random.next(this.columnCount - 1);

            if (!this.tiles[row][col]) {
                this.tiles[row][col] = new Mine();
                minesToSet--;
            }
        }
    }

    private fillWithClues(): void {
        for (let row: number = 0; row < this.rowCount; row++) {
            for (let col: number = 0; col < this.columnCount; col++) {
                if (!this.tiles[row][col]) {
                    this.tiles[row][col] = new Clue(this.countNeighbourMines(row, col));
                }
            }
        }
    }

    private countNeighbourMines(row: number, col: number): number {
        let count: number = 0;

        for (let rowOffset: number = -1; rowOffset <= 1; rowOffset++) {
            let acurRow: number = row + rowOffset;

            if (acurRow >= 0 && acurRow < this.rowCount) {
                for (let colOffset: number = -1; colOffset <= 1; colOffset++) {
                    let acurColumn: number = col + colOffset;

                    if (acurColumn >= 0 && acurColumn < this.columnCount) {
                        if (this.tiles[acurRow][acurColumn] instanceof Mine) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }

    public getTile(row: number, col: number): Tile {
        return this.tiles[row][col];
    }

    public openTile(row: number, col: number): void {
        let tile: Tile = this.tiles[row][col];

        if (tile.state === TileState.CLOSED) {
            tile.state = TileState.OPEN;
            if(!(tile['value'] >= 0)) { //it is a mine
                this.state = GameState.FAILED;
                return;
            }
            if(tile['value'] >= 0) { //it is a clue
                if (tile['value'] === 0) {
                    this.openNeighbouringTiles(row, col);
                }
            }
            if (this.isSolved()) {
                this.state = GameState.SOLVED;
            }
        }
    }

    private openNeighbouringTiles(row: number, col: number): void {
        for (let rowOffset: number = -1; rowOffset <= 1; rowOffset++) {
            let acurRow: number = row + rowOffset;
            if (acurRow >= 0 && acurRow < this.rowCount) {
                for (let colOffset: number = -1; colOffset <= 1; colOffset++) {
                    let acurColumn: number = col + colOffset;
                    if (acurColumn >= 0 && acurColumn < this.columnCount) {
                        this.openTile(acurRow, acurColumn);
                    }
                }
            }
        }
    }

    markTile(row: number, col: number): void {
        const tile: Tile = this.tiles[row][col];

        if (tile.state === TileState.CLOSED) {
            tile.state = TileState.MARKED;
        } else if (tile.state === TileState.MARKED) {
            tile.state = TileState.CLOSED;
        }
    }

    private isSolved(): boolean {
        return this.rowCount * this.columnCount - this.mineCount == this.getNumberOfOpen();
    }

    public getNumberOfOpen(): number {
        let count: number = 0;
        for (let row: number = 0; row < this.rowCount; row++) {
            for (let col: number = 0; col < this.columnCount; col++) {
                if (this.tiles[row][col].state == TileState.OPEN) {
                    count++;
                }
            }
        }
        return count;
    }
}
