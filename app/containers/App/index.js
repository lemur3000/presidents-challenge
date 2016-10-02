import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import css from './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      presidents: []
    }
  }

  componentDidMount() {
    fetch('/api/presidents')
      .then(x => x.json())
      .then(presidents => this.setState({ presidents }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className={css.root}>
        {
          this.state.presidents.length
            ? this.state.presidents.map(x =>
              <div className={css.item}>
                <div className={css.name}>{x.name}</div>
                <img
                  className={css.img}
                  src={require(`images/${x.image}`)}
                />
              </div>)
            : <div>Me no have presidents</div>
        }
      </div>
    )
  }
}