import React, { Component } from 'react'
import './App.css'
import GameBoard from './GameBoard'
import GameModel from './models/Game'

class App extends Component {

  constructor() {
    super()
    this.game = new GameModel({ dimension: 3 })
    this.state = { boardSpaces: this.game.boardSpaces }
  }

  takeTurn(boardSpace) {
    this.game.takeTurn(boardSpace)
    this.setState({ boardSpaces: this.game.boardSpaces })
  }

  render() {
    return (
      <div className="App">
        <GameBoard
          boardSpaces={this.state.boardSpaces}
          takeTurn={(boardSpace) => this.takeTurn(boardSpace)}
        />
      </div>
    )
  }
}

export default App
