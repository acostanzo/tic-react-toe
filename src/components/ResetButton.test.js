import React from 'react'
import ReactDOM from 'react-dom'
import ResetButton from './ResetButton'

describe('ResetButton', () => {
  const reset = function(){}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ResetButton reset={reset} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
