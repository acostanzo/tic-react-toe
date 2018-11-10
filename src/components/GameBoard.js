import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GameBoard.css'

class GameBoard extends Component {

  renderCell(key) {
    return (
      <div
        key={key}
        className="game-cell"
        onClick={ () => this.props.takeTurn(key) }
      >{this.props.boardSpaces.get(key)}</div>
    )
  }

  render() {
    return (
      <div className="game-board">
        { Array.from(this.props.boardSpaces.keys()).map((key) => this.renderCell(key)) }
      </div>
    )
  }
}

GameBoard.propTypes = {
  boardSpaces: PropTypes.object,
  takeTurn: PropTypes.func,
}

export default GameBoard
