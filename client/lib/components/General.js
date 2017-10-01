import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import socket from '../socket'

export default class General extends React.Component {
  constructor (props, ctx) {
    super(props)

    this.state = {
      start: Date.now(),
      total: 0,
      perSec: 0,
      perMinute: 0,
      perHours: 0
    }

    socket.on('twitter', this.calculateStats.bind(this))
  }

  calculateStats (data) {
    const curTime = Date.now()
    const curStats = Object.assign({}, this.state)
    const total = curStats.total + 1

    const rawPerSec = total / ((curTime - curStats.start) / 1000)
    const perSec = Math.ceil(rawPerSec)
    const perMinute = Math.ceil(rawPerSec * 60)
    const perHour = Math.ceil(rawPerSec * 3600)
    this.setState({ total, perSec, perMinute, perHour })
  }

  render () {
    return (
      <ListGroup>
        <ListGroupItem>
          <strong>{this.state.total}</strong> Tweets
        </ListGroupItem>
        <ListGroupItem>
          <ul className='list-time-stats'>
            <li>
              <strong>{this.state.perSec}</strong>/sec
            </li>
            <li>
              <strong>{this.state.perMinute}</strong>/min
            </li>
            <li>
              <strong>{this.state.perHour}</strong>/hr
            </li>
          </ul>
        </ListGroupItem>
      </ListGroup>
    )
  }
}
