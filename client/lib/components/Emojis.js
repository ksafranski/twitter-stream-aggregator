import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import socket from '../socket'

export default class Emojis extends React.Component {
  constructor (props, ctx) {
    super(props)

    this.state = {
      emojis: {},
      ranking: []
    }
  }

  componentDidMount () {
    socket.on('twitter', this.calculateEmojis.bind(this))
  }

  calculateEmojis (data) {
    const curEmojis = Object.assign({}, this.state.emojis)

    // New emojis?
    if (data.emojis.length) {
      const keys = Object.keys(curEmojis)

      // Add new emojis
      data.emojis.forEach((e) => {
        const eString = e.toString()
        if (keys.indexOf(eString) >= 0) {
          curEmojis[eString] = curEmojis[eString] + 1
        } else {
          curEmojis[eString] = 1
        }
      })
    }

    // Order by score
    const ranking = Object.keys(curEmojis).sort((a, b) => curEmojis[a] - curEmojis[b]).reverse()

    // Set state
    this.setState({
      emojis: curEmojis,
      ranking
    })
  }

  render () {
    return (
      <ListGroup>
        { this.state.ranking.map((e, i) => (
          <ListGroupItem key={i++}>
            <strong>{this.state.emojis[e]}</strong> {e}
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}
