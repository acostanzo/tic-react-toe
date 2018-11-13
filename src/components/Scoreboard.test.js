import React from 'react'
import ReactDOM from 'react-dom'
import Scoreboard from './Scoreboard'

describe('Scoreboard', () => {
  const players = [{}, {}]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Scoreboard players={players} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
