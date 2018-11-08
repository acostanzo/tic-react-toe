import React, { Component } from 'react'
import './GameBoard.css'

class GameBoard extends Component {

  selectCell(index) {
    console.log("selected: ", index)
    this.props.makeMove(index)
  }

  renderCell(i) {
    return (
      <div
        key={i}
        className="game-cell"
        onClick={ () => this.selectCell(i) }
      ></div>
    )
  }

  render() {
    return (
      <div className="game-board">
        { [...Array(9).keys()].map((i) => this.renderCell(i)) }
      </div>
    )
  }
}

export default GameBoard
