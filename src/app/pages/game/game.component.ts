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
  column: number;
  row: number;
}

interface DiscPosition {
  c1r1: {
    color: DiscState;
    position: {
      x: 0.07;
      y: 1;
    },
    column: number;
    row: number;
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  gridPositions: DiscPosition[] = []
}
