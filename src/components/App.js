import React, { Component } from 'react'
import './App.css'

import ActivePlayer from './ActivePlayer'
import GameBoard from './GameBoard'
import GameOver from './GameOver'
import ResetButton from './ResetButton'

import GameModel from '../models/Game'

class App extends Component {

  constructor() {
    super()
    this.game = new GameModel({ dimension: 3 })
    this.state = this.getGameState()
  }

  takeTurn(boardSpace) {
    this.game.takeTurn(boardSpace)
    this.syncStateWithGame()
  }

  resetGame() {
    this.game.reset()
    this.syncStateWithGame()
  }

  getGameState() {
    return {
      activePlayer: this.game.activePlayer,
      boardSpaces: this.game.boardSpaces,
      gameOver: this.game.gameOver,
      winner: this.game.winner,
    }
  }

  syncStateWithGame() {
    this.setState(this.getGameState())
  }

  conditionallyRenderResetButton() {
    const resetButton = <ResetButton reset={() => this.resetGame()} />
    return this.state.gameOver ? resetButton: ''
  }

  conditionallyRenderActivePlayer() {
    const activePlayer = <ActivePlayer player={this.state.activePlayer} />
    return this.state.gameOver ? '' : activePlayer
  }

  conditionallyRenderGameOver() {
    const gameOver = <GameOver winner={this.state.winner} />
    return this.state.gameOver ? gameOver : ''
  }

  render() {
    return (
      <div className="app">
        <div className="message-center">
          {this.conditionallyRenderActivePlayer()}
          {this.conditionallyRenderGameOver()}
        </div>

        <GameBoard
          boardSpaces={this.state.boardSpaces}
          takeTurn={boardSpace => this.takeTurn(boardSpace)}
        />
        {this.conditionallyRenderResetButton()}
      </div>
    )
  }
}

export default App
