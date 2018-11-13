import './App.css'
import GameBoard from './GameBoard'
import GameModel from '../models/Game'
import MessageCenter from './MessageCenter'
import React, { Component } from 'react'
import ResetButton from './ResetButton'
import Scoreboard from './Scoreboard'
import Title from './Title'

class App extends Component {

  constructor() {
    super()
    this.game = new GameModel({ dimension: 3 })
    this.state = this.getGameState()
  }

  takeTurn(boardSpace) {
    if (!this.game.gameOver) {
      this.game.takeTurn(boardSpace)
      this.syncStateWithGame()
    }
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
      players: this.game.players,
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

  render() {
    return (
      <div className="app">
        <div className="app-column">
          <Title />

          <MessageCenter
            activePlayer={this.state.activePlayer}
            gameOver={this.state.gameOver}
            winner={this.state.winner}
          />

          <GameBoard
            boardSpaces={this.state.boardSpaces}
            takeTurn={boardSpace => this.takeTurn(boardSpace)}
          />
        </div>

        <div className="app-column">
          <Scoreboard players={this.state.players} />

          {this.conditionallyRenderResetButton()}
        </div>
      </div>
    )
  }
}

export default App
