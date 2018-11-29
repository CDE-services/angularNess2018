import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {MinesComponent} from './minesweeper/mines.component';
import {FieldComponent} from './minesweeper/field.component';
import {TileComponent} from './minesweeper/tile.component';
import {ScoreService} from './services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    FieldComponent,
    MinesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
