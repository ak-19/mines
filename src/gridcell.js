import React, {PureComponent} from 'react';

class GridCell extends PureComponent {
  render(){
    const {row, col, state} = this.props;
    return (
      <div key={`${row}-${col}`}
           className="grid-box"
           onClick={e => this.props.cellClicked(row,col)}>
        <div className="grid-box-content">
          <div className="grid-box-content-text">
            {
              state.hidden
              ? null
              :
                state.bomb
                ? <img src="./mine.png" alt="bomb"/>
                : state.numberOfBombs
            }
          </div>
        </div>
      </div>
    )
  }
}

export default GridCell;
