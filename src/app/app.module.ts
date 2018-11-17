import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {MinesComponent} from './minesweeper/mines.component';
import {FieldComponent} from './minesweeper/field.component';
import {TileComponent} from './minesweeper/tile.component';

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
