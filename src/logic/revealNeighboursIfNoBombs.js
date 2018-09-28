import calcaulatenumberofbombs from './calcaulatenumberofbombs';

export default function(cellStates, row, col) {
  let count = 0;
  for (let r = Math.max(row - 1, 0); r <= Math.min(row + 1, 9); r++) {
    for (let c = Math.max(col - 1, 0); c <= Math.min(col + 1, 9); c++) {
      if (r === row && c === col) {
        continue;
      }

      cellStates[r][c].numberOfBombs = calcaulatenumberofbombs(cellStates, r, c);
      if (cellStates[r][c].numberOfBombs === 0 && cellStates[r][c].hidden) {
        cellStates[r][c].hidden = false;
        count++;
      }
    }
  }
  return count;
}
