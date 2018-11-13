import MessageCenter from './MessageCenter'
import React from 'react'
import ReactDOM from 'react-dom'

describe('MessageCenter', () => {
  const activePlayer = {}
  const gameOver = false
  const winner = {}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MessageCenter
        activePlayer={activePlayer}
        gameOver={gameOver}
        winner={winner}
      />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
