import Game from './Game'

describe('Game', () => {
  let game

  const players = [
    { name: 'Player 1', moves: [], marker: 'X', wins: 0 },
    { name: 'Player 2', moves: [], marker: 'O', wins: 0 },
  ]

  const initialGameState = {
    boardSpaces: new Map([
      [0, undefined],
      [1, undefined],
      [2, undefined],
      [3, undefined],
      [4, undefined],
      [5, undefined],
      [6, undefined],
      [7, undefined],
      [8, undefined],
    ]),
    availableBoardSpaces: [0,1,2,3,4,5,6,7,8],
    players: players,
    winningSets: [
      // Horizontal Wins
      [0,1,2],
      [3,4,5],
      [6,7,8],


      // Vertical Wins
      [0,3,6],
      [1,4,7],
      [2,5,8],

      // Diagonal Wins
      [0,4,8],
      [6,4,2],
    ],
    activePlayer: players[0],
    gameOver: false,
    winner: false,
  }

  beforeEach(() => {
    game = new Game({ dimension: 3 })
  })

  describe('constructor', () => {
    it('sets the dimension from the config on the instance', () => {
      expect(game.dimension).toEqual(3)
    })

    it('resets the game', () => {
      expect(game).toEqual(expect.objectContaining(initialGameState))
    })
  })

  describe('checkWinCondition', () => {
    it('returns true if the active player has a winning set of moves', () => {
      game.activePlayer = { moves: [0,1,2] }
      expect(game.checkWinCondition()).toEqual(true)
    })

    it('returns false if the active player has no winning set of moves', () => {
      game.activePlayer = { moves: [0,1,3,4] }
      expect(game.checkWinCondition()).toEqual(false)
    })
  })

  describe('toggleActivePlayer', () => {
    it('switches the active player from player 1 to player 2', () => {
      game.activePlayer = game.players[0]
      game.toggleActivePlayer()
      expect(game.activePlayer).toEqual(game.players[1])
    })

    it('switches the active player from player 2 to player 1', () => {
      game.activePlayer = game.players[1]
      game.toggleActivePlayer()
      expect(game.activePlayer).toEqual(game.players[0])
    })
  })

  describe('takeTurn', () => {
    let actingPlayer

    beforeEach(() => {
      actingPlayer = game.players[0]
    })

    describe('when the board space is invalid', () => {
    })

    describe('when the board space is invalid', () => {
      it('alerts that the space has been taken', () => {
        window.alert = jest.fn().mockName('alert')
        game.availableBoardSpaces = []
        game.takeTurn(0)
        expect(alert).toHaveBeenCalledWith('This space has already been taken')
      })
    })

    describe('when the board space is valid', () => {
      it('adds the given board space to the active player\'s moves', () => {
        game.takeTurn(0)
        expect(actingPlayer.moves[0]).toEqual(0)
      })

      it('removes the board space from the available board spaces', () => {
        game.takeTurn(0)
        expect(game.availableBoardSpaces.indexOf(0)).toEqual(-1)
      })

      it('checks the win condition', () => {
        game.checkWinCondition = jest.fn().mockName('game.checkWinCondition')
        game.takeTurn(0)
        expect(game.checkWinCondition).toHaveBeenCalled()
      })

      describe('when the move will win the game', () => {
        beforeEach(() => {
          game.endGame = jest.fn().mockName('game.endGame')
          game.toggleActivePlayer = jest.fn().mockName('game.toggleActivePlayer')
          game.checkWinCondition = jest.fn(() => {
            return true
          }).mockName('game.checkWinCondition')
          game.takeTurn(0)
        })

        it('ends the game', () => {
          expect(game.endGame).toHaveBeenCalled()
        })

        it('doesn\'t toggle the active player', () => {
          expect(game.toggleActivePlayer).not.toHaveBeenCalled()
        })
      })

      describe('when the move will cause a draw', () => {
        beforeEach(() => {
          game.endGame = jest.fn().mockName('game.endGame')
          game.toggleActivePlayer = jest.fn().mockName('game.toggleActivePlayer')
          game.checkWinCondition = jest.fn(() => {
            return false
          }).mockName('game.checkWinCondition')
          game.availableBoardSpaces = [0]
          game.takeTurn(0)
        })

        it('ends the game when', () => {
          expect(game.endGame).toHaveBeenCalledWith(false)
        })
      })

      describe('when the move will not win the game', () => {
        beforeEach(() => {
          game.endGame = jest.fn().mockName('game.endGame')
          game.toggleActivePlayer = jest.fn().mockName('game.toggleActivePlayer')
          game.checkWinCondition = jest.fn(() => {
            return false
          }).mockName('game.checkWinCondition')
          game.takeTurn(0)
        })

        it('doesn\'t end the game', () => {
          expect(game.endGame).not.toHaveBeenCalled()
        })

        it('toggles the active player', () => {
          expect(game.toggleActivePlayer).toHaveBeenCalled()
        })
      })
    })
  })

  describe('endGame', () => {
    it('sets game over to true', () => {
      game.gameOver = false
      game.endGame()
      expect(game.gameOver).toEqual(true)
    })

    it('sets the winner on the instance', () => {
      game.endGame(game.players[0])
      expect(game.winner).toEqual(game.players[0])
    })
  })

  describe('reset', () => {
    it('sets the game back to its initial state', () => {
    })
  })

  describe('reset', () => {
    it('resets game elements back to the initial state except for tracked wins', () => {
      const endState = {...initialGameState}
      endState.players[0].wins = 1;

      game.takeTurn(0)
      game.takeTurn(1)
      game.takeTurn(3)
      game.takeTurn(4)
      game.takeTurn(6)
      game.reset()

      expect(game).toEqual(expect.objectContaining(endState))
    })
  })
})
