import buildWinningSets from '../helpers/buildWinningSets'

export default class {
  constructor(config) {
    this.dimension = config.dimension
    this.reset()
  }

  checkWinCondition() {
    const moves = this.activePlayer.moves
    return this.winningSets.some(set => movesIncludeFullSet(moves, set))
  }

  toggleActivePlayer() {
    this.activePlayer = this.activePlayer === this.players[0] ? this.players[1] : this.players[0]
  }

  takeTurn(boardSpace) {
    const boardSpaceIndex = this.availableBoardSpaces.indexOf(boardSpace)

    if (boardSpaceIndex >= 0) {
      this.activePlayer.moves.push(boardSpace)
      this.availableBoardSpaces.splice(boardSpaceIndex, 1)
      this.boardSpaces.set(boardSpace, this.activePlayer.marker)

      if (this.checkWinCondition()) {
        this.endGame(this.activePlayer)
      } else if(!this.availableBoardSpaces.length) {
        this.endGame(false)
      } else  {
        this.toggleActivePlayer()
      }

    } else {
      alert('This space has already been taken')
    }
  }

  endGame(winner) {
    this.winner = winner
    this.gameOver = true
  }

  reset() {
    Object.assign(this, getInitialGameState(this.dimension))
  }
}

function getInitialGameState(dimension) {
  const boardSpaces = new Map([...Array(dimension*dimension).keys()].map(i => [i]))
  const availableBoardSpaces = Array.from(boardSpaces.keys())
  const players = [
    { name: 'Player 1', moves: [], marker: 'X' },
    { name: 'Player 2', moves: [], marker: 'O' },
  ]
  const winningSets = buildWinningSets(dimension)
  const activePlayer = players[0]
  const gameOver = false

  return {
    boardSpaces,
    availableBoardSpaces,
    players,
    winningSets,
    activePlayer,
    gameOver,
  }
}

function movesIncludeFullSet(moves, set) {
  return set.every(position => {
    return moves.indexOf(position) >= 0
  })
}
