import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Marker extends Component {

  render() {
    const marker = this.props.marker

    return (
      <img
        alt={marker}
        height="100%"
        src={`/marker_${marker}.png`}
        width="100%"
      />
    )
  }
}

Marker.propTypes = {
  marker: PropTypes.string,
}

export default Marker
