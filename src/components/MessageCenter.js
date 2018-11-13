import './MessageCenter.css'
import ActivePlayer from './ActivePlayer'
import GameOver from './GameOver'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class MessageCenter extends Component {

  getMessage() {
    if (this.props.gameOver) {
      return <GameOver winner={this.props.winner} />
    } else {
      return (
        <ActivePlayer
          key={this.props.activePlayer.marker}
          player={this.props.activePlayer}
        />
      )
    }
  }

  render() {

    return (
      <div className="message-center tile-floating">
        <CSSTransitionGroup
          component="div"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionName="message-center-transition"
        >
          {this.getMessage()}
        </CSSTransitionGroup>
      </div>
    )
  }
}

MessageCenter.propTypes = {
  activePlayer: PropTypes.object,
  gameOver: PropTypes.bool,
  winner: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
}

export default MessageCenter
