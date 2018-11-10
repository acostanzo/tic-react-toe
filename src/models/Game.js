import winSetBuilder from '../winSetBuilder'

export default class {
  constructor(config) {
    this.boardSpaces = [...Array(config.dimension*config.dimension).keys()]
    this.availableBoardSpaces = [...this.boardSpaces]
    this.players = [ { moves: [] }, { moves: [] } ]
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
    if (this.isBoardSpaceValid(boardSpace)) {
      this.activePlayer.moves.push(boardSpace)
      this.checkWinCondition() ? this.endGame() : this.toggleActivePlayer()
    } else {
      alert('This space has already been taken')
    }
  }

  isBoardSpaceValid(boardSpace) {
    return this.availableBoardSpaces.indexOf(boardSpace) >= 0
  }
}

function movesIncludeFullSet(moves, set) {
  return set.every((position) => {
    return moves.indexOf(position) >= 0
  })
}
