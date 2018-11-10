import winSetBuilder from '../winSetBuilder'

export default class {
  constructor(config) {
    this.boardSpaces = new Map([...Array(config.dimension*config.dimension).keys()].map(i => [i]))
    this.availableBoardSpaces = Array.from(this.boardSpaces.keys())
    this.players = [ { moves: [], marker: 'X' }, { moves: [], marker: 'O' } ]
    this.winningSets = winSetBuilder(config.dimension)
    this.activePlayer = this.players[0]
    this.gameOver = false
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
      this.checkWinCondition() ? this.endGame() : this.toggleActivePlayer()
    } else {
      alert('This space has already been taken')
    }
  }

  endGame() {
    alert('Game Over')
    this.gameOver = true
  }
}

function movesIncludeFullSet(moves, set) {
  return set.every((position) => {
    return moves.indexOf(position) >= 0
  })
}
