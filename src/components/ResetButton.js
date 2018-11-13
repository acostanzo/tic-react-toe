import './ResetButton.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class ResetButton extends Component {

  render() {
    return (
      <div className="reset-button tile-floating">
        <button className="pure-button" onClick={this.props.reset}>
          Reset Game
        </button>
      </div>
    )
  }
}

ResetButton.propTypes = {
  reset: PropTypes.func,
}

export default ResetButton
