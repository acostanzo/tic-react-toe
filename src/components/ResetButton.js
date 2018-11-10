import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResetButton extends Component {

  render() {
    return (
      <button onClick={this.props.reset}>Reset Game</button>
    )
  }
}

ResetButton.propTypes = {
  reset: PropTypes.func,
}

export default ResetButton
