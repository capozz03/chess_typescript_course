import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection =
      this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    const isOffsetToOneStep = target.y === this.cell.y + direction;
    const isOffsetToTwoStep =
      this.isFirstStep && target.y === this.cell.y + firstStepDirection;

    const isEmptyTargetCell = this.cell.board
      .getCell(target.x, target.y)
      .isEmpty();

    if (
      (isOffsetToOneStep || isOffsetToTwoStep) &&
      target.x === this.cell.x &&
      isEmptyTargetCell
    ) {
      return true;
    }

    if (
      isOffsetToOneStep &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
