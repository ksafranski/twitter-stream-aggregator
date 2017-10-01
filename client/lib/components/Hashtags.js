import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import socket from '../socket'

export default class Hashtags extends React.Component {
  constructor (props, ctx) {
    super(props)

    this.state = {
      hashtags: {},
      ranking: []
    }
  }

  componentDidMount () {
    socket.on('twitter', this.calculateHashtags.bind(this))
  }

  calculateHashtags (data) {
    const curHashtags = Object.assign({}, this.state.hashtags)

    // New emojis?
    if (data.hashtags.length) {
      const keys = Object.keys(curHashtags)

      // Add new emojis
      data.hashtags.forEach((h) => {
        if (keys.indexOf(h) >= 0) {
          curHashtags[h] = curHashtags[h] + 1
        } else {
          curHashtags[h] = 1
        }
      })
    }

    // Order by score
    const ranking = Object.keys(curHashtags).sort((a, b) => curHashtags[a] - curHashtags[b]).reverse()

    // Set state
    this.setState({
      hashtags: curHashtags,
      ranking
    })
  }

  render () {
    return (
      <div>
        <h2><i className='fa fa-hashtag' />Hashtags</h2>
        <ListGroup>
          { this.state.ranking.map((h, i) => (
            <ListGroupItem key={i++}>
              <strong>{this.state.hashtags[h]}</strong> {h}
            </ListGroupItem>
          )) }
        </ListGroup>
      </div>
    )
  }
}
