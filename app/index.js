import React from 'react'
import { render } from 'react-dom'

function App(props) {
  return (
    <div>{props.stuff ? props.stuff : `I don't have stuff`}</div>
  )
}

render(<App stuff={'Sup dog'} />, document.getElementById('app'))