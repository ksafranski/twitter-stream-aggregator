import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import socket from '../socket'

export default class Links extends React.Component {
  constructor (props, ctx) {
    super(props)

    this.state = {
      links: {},
      ranking: []
    }
  }

  componentDidMount () {
    this._mounted = true
    socket.on('twitter', this.calculateLinks.bind(this))
  }

  componentWillUnmount () {
    this._mounted = false
  }

  calculateLinks (data) {
    const curLinks = Object.assign({}, this.state.links)

    // New emojis?
    if (data.domains.length) {
      const keys = Object.keys(curLinks)

      // Add new emojis
      data.domains.forEach((d) => {
        if (keys.indexOf(d) >= 0) {
          curLinks[d] = curLinks[d] + 1
        } else {
          curLinks[d] = 1
        }
      })
    }

    // Order by score
    const ranking = Object.keys(curLinks).sort((a, b) => curLinks[a] - curLinks[b]).reverse()

    // Set state
    if (this._mounted) {
      this.setState({
        links: curLinks,
        ranking
      })
    }
  }

  render () {
    return (
      <div>
        <h2><i className='fa fa-globe' />Links</h2>
        <ListGroup>
          { this.state.ranking.map((l, i) => (
            <ListGroupItem key={i++}>
              <strong>{this.state.links[l]}</strong> {l}
            </ListGroupItem>
          )) }
        </ListGroup>
      </div>
    )
  }
}
