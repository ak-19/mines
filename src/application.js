import React, { Component } from 'react';

import GridCell from './gridcell';
import generateStateArray from './util/generatestatearray';
import calcaulateNumberOfBombs from './util/calcaulatenumberofbombs';
import Modal from './modal';
import './application.css';


class Application extends Component {
  state = {
    cellStates: generateStateArray(),
    gameIsRuning: false,
    gameOverMessage: '',
    clearedNumber: 0
  }

  renderGrid(){
    const cells = [];

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        cells.push((<GridCell key={`${row}-${col}`}
                         cellClicked={e => this.cellClicked(row,col)}
                         row={row}
                         state={this.state.cellStates[row][col]}
                         col={col}/>));
      }
    }

    return cells;
  }

  cellClicked(row,col){
    let {cellStates, gameIsRuning, gameOverMessage, clearedNumber} = this.state;

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
      }
      this.setState({cellStates, gameIsRuning, gameOverMessage, clearedNumber});
    }
  }

  renderModal(){
    return (
      <Modal startNewGame={e => this.startNewGame()} gameOverMessage={this.state.gameOverMessage}/>
    )
  }

  startNewGame(){
    this.setState( {
      cellStates: generateStateArray(),
      gameIsRuning: true
    });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.gameIsRuning ? null : this.renderModal()}
        {this.renderGrid()}
      </div>
    );
  }
}

export default Application;
