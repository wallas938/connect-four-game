import { Component } from '@angular/core';

enum DiscState {
  Yellow,
  Red,
  Empty
}
interface Disc {
  position: {
    x: number;
    y: number;
  },
  color: DiscState;
  column: number;
  row: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  columns: Disc[] = []
}
