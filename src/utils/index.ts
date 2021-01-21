import { Cell, CellValue, CellState } from "../types";

const MAX_COLS = 9;
const MAX_ROWS = 9;

export default function generateCells() {
  const cells: Cell[][] = [...Array(MAX_COLS)].map(() => [
    ...Array(MAX_ROWS).fill({
      value: CellValue.none,
      state: CellState.open,
    }),
  ]);
  return cells;
}
