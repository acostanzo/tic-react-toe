import PropTypes from 'prop-types'
import React, { Component } from 'react'

class GameOver extends Component {

  getWinMessage() {
    return `Congratulations ${this.props.winner.name}, you won! Click "Reset Game" to play again.`
  }

  getDrawMessage() {
    return 'Good Game! It\'s a draw. Click the "Reset Game" button to play again.'
  }

  render() {
    return (
      <div>
        {this.props.winner ? this.getWinMessage() : this.getDrawMessage()}
      </div>
    )
  }
}

GameOver.propTypes = {
  winner: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
}

export default GameOver
