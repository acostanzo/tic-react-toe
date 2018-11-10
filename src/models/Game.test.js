import Game from './Game'

describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game({ dimension: 3 })
  })

  describe('constructor', () => {
    it('generates board spaces based on the dimension config', () => {
      expect(game.boardSpaces).toEqual([0,1,2,3,4,5,6,7,8])
    })

    it('generates an array of available board spaces', () => {
      expect(game.availableBoardSpaces).toEqual([0,1,2,3,4,5,6,7,8])
    })

    it('generates two players on the instance', () => {
      expect(game.players.length).toEqual(2)
    })

    it('generates winning sets on the instance', () => {
      expect(game.winningSets).toBeDefined()
    })

    it('sets the active player as the first player in the players array', () => {
      expect(game.activePlayer).toEqual(game.players[0])
    })

    it('sets game over to false by default', () => {
      expect(game.gameOver).toEqual(false)
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

    describe('when the position is valid', () => {
      it('adds the given board space to the active player\'s moves', () => {
        game.takeTurn(0)
        expect(actingPlayer.moves[0]).toEqual(0)
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

        it('ends the game when', () => {
          expect(game.endGame).toHaveBeenCalled()
        })

        it('doesn\'t toggle the active player', () => {
          expect(game.toggleActivePlayer).not.toHaveBeenCalled()
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

  describe('isBoardSpaceValid', () => {
    beforeEach(() => {
      game.availableBoardSpaces = [0]
    })

    it('returns true if the position is in the available positions', () => {
      expect(game.isBoardSpaceValid(0)).toEqual(true)
    })

    it('returns false if the position is not in the available positions', () => {
      expect(game.isBoardSpaceValid(1)).toEqual(false)
    })
  })
})
