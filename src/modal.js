import React from 'react';

const Modal = (props) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
          <h3 className="start-new-game-message">{props.gameOverMessage}</h3>
          <div className="start-new-game-button" onClick={e => props.startNewGame()}>Start new game</div>
      </div>
    </div>
  )
}

export default Modal;
