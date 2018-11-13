import buildWinningSets from '../helpers/buildWinningSets'

export default class {
  constructor(config) {
    this.dimension = config.dimension
    this.players = [
      { name: 'Player 1', moves: [], marker: 'X', wins: 0 },
      { name: 'Player 2', moves: [], marker: 'O', wins: 0 },
    ]
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

    }
  }

  endGame(winner) {
    this.winner = winner
    this.gameOver = true
    if (winner) this.winner.wins += 1
  }

  reset() {
    const boardSpaces = generateBoardSpaces(this.dimension)
    const availableBoardSpaces = Array.from(boardSpaces.keys())
    const winningSets = buildWinningSets(this.dimension)
    const activePlayer = this.players[0]
    const gameOver = false
    const winner = false

    // Reset game properties
    Object.assign(this, {
      activePlayer,
      availableBoardSpaces,
      boardSpaces,
      gameOver,
      winner,
      winningSets,
    })

    // Reset player moves
    this.players.forEach(player => player.moves = [])
  }
}

function generateBoardSpaces(dimension) {
  return new Map([...Array(dimension*dimension).keys()].map(i => [i]))
}

function movesIncludeFullSet(moves, set) {
  return set.every(position => {
    return moves.indexOf(position) >= 0
  })
}
