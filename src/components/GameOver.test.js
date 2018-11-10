import React from 'react'
import ReactDOM from 'react-dom'
import GameOver from './GameOver'

describe('GameOver', () => {
  const winner = {
    name: 'Player 1', moves: [0,1,2]
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GameOver winner={winner}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
