import PropTypes from 'prop-types'
import React, { Component } from 'react'

class ActivePlayer extends Component {

  render() {
    const { name, marker } = this.props.player
    return (
      <div>
        {name}, it's your turn! Click an open space to drop an {marker} marker.
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  player: PropTypes.object,
}

export default ActivePlayer

