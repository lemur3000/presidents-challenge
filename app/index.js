import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import { render } from 'react-dom'
import App from 'containers/App'

function Team(props) {
  return (
    <div>I am a team</div>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" exactly component={App} />
        <Match pattern="/team" component={Team} />
      </div>
    </BrowserRouter>
  )
}

render(<Router />, document.getElementById('app'))