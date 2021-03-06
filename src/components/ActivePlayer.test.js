import ActivePlayer from './ActivePlayer'
import React from 'react'
import ReactDOM from 'react-dom'

describe('ActivePlayer', () => {
  const player = {
    name: 'Player 1',
    marker: 'X',
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ActivePlayer player={player}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
