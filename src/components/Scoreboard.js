import './Scoreboard.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Scoreboard extends Component {

  render() {
    return (
      <div className="scoreboard tile-floating">
        <h2>
          Scoreboard
        </h2>

        <table className="pure-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Marker</th>
              <th>Wins</th>
            </tr>
          </thead>

          <tbody>
            {this.props.players.map(({ name, marker, wins }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{marker}</td>
                  <td>{wins}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

Scoreboard.propTypes = {
  players: PropTypes.array,
}

export default Scoreboard
