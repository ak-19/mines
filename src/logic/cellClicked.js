import calcaulateNumberOfBombs from './calcaulatenumberofbombs';
import revealNeighboursIfNoBombs from './revealNeighboursIfNoBombs';

export default function (row,col, stateHolder){
  let {cellStates, gameIsRuning, gameOverMessage, clearedNumber} = stateHolder.state;

  if (!gameIsRuning) {
    return;
  }

  if (cellStates[row][col].hidden) {
    cellStates[row][col].hidden = false;
    cellStates[row][col].numberOfBombs = calcaulateNumberOfBombs(cellStates, row,col);
    clearedNumber++;

    if (cellStates[row][col].bomb) {
      gameIsRuning = false;
      gameOverMessage = 'Game over';
      clearedNumber = 0;
    }else if(clearedNumber >= 89){
      gameIsRuning = false;
      gameOverMessage = 'Congratulations you finished the game!!';
      clearedNumber = 0;
    }else if(cellStates[row][col].numberOfBombs === 0){
      clearedNumber += revealNeighboursIfNoBombs(cellStates, row, col);
    }

    stateHolder.setState({cellStates, gameIsRuning, gameOverMessage, clearedNumber});
  }
}
