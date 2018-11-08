import React, { Component } from 'react'
import './App.css'
import GameBoard from './GameBoard'

class App extends Component {

  constructor() {
    super()

    this.players = {
      x: { name: 'Foo', moves: [] },
      o: { name: 'Bar', moves: [] },
    }

    this.boardPositions = [...Array(9).keys()]
    this.activePlayer = this.players.x
    this.gameOver = false
  }

  makeMove(position) {
    let positionIndex = this.boardPositions.indexOf(position)

    if (positionIndex >= 0) {
      this.activePlayer.moves.push(position)
      this.boardPositions.splice(positionIndex, 1)

      if (this.checkWinCondition()) {
        console.log(`YOU WON ${this.activePlayer.name}!`)
      } else {
        this.toggleActivePlayer()
      }
    } else {
      alert('You can\'t move here')
    }
  }

  checkWinCondition() {
    const winningSets = [
      // Horizontal wins
      [0,1,2],
      [3,4,5],
      [6,7,8],

      // Vertical wins
      [0,3,6],
      [1,4,7],
      [2,5,8],

      // Diagonal wins
      [0,4,8],
      [2,4,6],
    ]

    const moves = this.activePlayer.moves

    return winningSets.some((set) => this.movesIncludeFullSet(moves, set))
  }

  movesIncludeFullSet(moves, set) {
    return set.every((position) => {
      return moves.indexOf(position) >= 0
    })
  }

  // Switch whictch player is the active 
  toggleActivePlayer() {
    this.activePlayer = this.activePlayer === this.players.x ? this.players.o : this.players.x
  }

  render() {
    return (
      <div className="App">
        <GameBoard
          makeMove={this.makeMove.bind(this)}
          boardPositions={this.boardPositions}
        />
      </div>
    )
  }
}

export default App
