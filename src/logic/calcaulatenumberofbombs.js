export default (states, row,col) => {
  let numberOfBombs = 0;

  for (let r = Math.max(row - 1, 0); r <= Math.min(9, row + 1); r++) {
    for (let c = Math.max(col - 1, 0); c <= Math.min(9, col + 1); c++) {
        if (states[r][c].bomb) {
          numberOfBombs++;
        }
    }
  }

  return numberOfBombs;
}
