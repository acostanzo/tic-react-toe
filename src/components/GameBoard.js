import './GameBoard.css'
import Marker from './Marker'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class GameBoard extends Component {

  renderCell(key) {
    const marker = this.props.boardSpaces.get(key)

    // Evenly size and provide extra space between cells
    const size = `calc(${100 / this.props.dimension}% - 2px)`

    return (
      <div
        key={key}
        className="game-cell"
        onClick={ () => this.props.takeTurn(key) }
        style={{
          width: size,
          height: size,
        }}
      >
        <CSSTransitionGroup
          className="game-cell-marker"
          component="div"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionName="scale-transition"
        >
          { marker ? <Marker marker={marker} /> : '' }
        </CSSTransitionGroup>
      </div>
    )
  }

  render() {
    const boardSpaceKeys = Array.from(this.props.boardSpaces.keys())

    return (
      <div className="game-board tile-floating">
        { boardSpaceKeys.map(key => this.renderCell(key)) }
      </div>
    )
  }
}

GameBoard.propTypes = {
  boardSpaces: PropTypes.object,
  takeTurn: PropTypes.func,
  dimension: PropTypes.number,
}

export default GameBoard
