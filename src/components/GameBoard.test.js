import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './GameBoard'
import GameModel from '../models/Game'

describe('GameBoard', () => {
  const boardSpaces = new Map()
  const takeTurn = function(){}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GameBoard boardSpaces={boardSpaces} takeTurn={takeTurn}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
