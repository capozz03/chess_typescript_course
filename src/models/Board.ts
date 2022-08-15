import { Bishop } from './figures/Bishop';
import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";
import { Pawn } from './figures/Pawn';

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // Черные ячейки, j - x, i - y
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // Белые, j - x, i - y
        }
      }
      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addPawns() {

  }

  private addKings() {
    
  }

  private addQueens() {
    
  }

  private addBishops() {
    
  }

  private addKnights() {
    
  }

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    new Queen(Colors.WHITE, this.getCell(3, 3))
    new Pawn(Colors.BLACK, this.getCell(5, 6))
    new Bishop(Colors.WHITE, this.getCell(2, 1))
  }
}