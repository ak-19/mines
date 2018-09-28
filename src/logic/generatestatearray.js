export default function () {
  const states = [];

  for (let row = 0; row < 10; row++) {
    states[row] = [];
    for (let col = 0; col < 10; col++) {
        states[row][col] = {
          bomb: false,
          hidden: true
        };
    }
  }

  let count = 0;

  while (count <= 10) {
    const r = getRanomNumberFrom0to10();
    const c = getRanomNumberFrom0to10();
    if (!states[r][c].bomb) {
      states[r][c].bomb = true;
      count++;
    }
  }

  return states;
}

function getRanomNumberFrom0to10() {
  return Math.floor(Math.random() * 10);
}
