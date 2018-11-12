import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import './GameBoard.css'

class GameBoard extends Component {

  renderCell(key) {
    const marker = this.props.boardSpaces.get(key)
    return (
      <div
        key={key}
        className="game-cell"
        onClick={ () => this.props.takeTurn(key) }
      >
        <CSSTransitionGroup
          className="game-cell-marker"
          component="div"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionName="game-cell-marker-transition"
        >
          { marker ? this.renderMarker(marker) : '' }
        </CSSTransitionGroup>
      </div>
    )
  }

  renderMarker(marker) {
    return (
      <img
        alt={marker}
        height="100%"
        src={`/marker_${marker}.png`}
        width="100%"
      />
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
