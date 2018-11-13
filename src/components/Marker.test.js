import GameModel from '../models/Game'
import Marker from './Marker'
import React from 'react'
import ReactDOM from 'react-dom'

describe('Marker', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Marker marker='x' />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
