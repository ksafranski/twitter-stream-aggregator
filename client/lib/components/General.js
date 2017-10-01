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
      perHour: 0,
      emojis: 0,
      hashtags: 0,
      links: 0,
      images: 0
    }

    socket.on('twitter', this.calculateStats.bind(this))
  }

  calculateStats (data) {
    const curTime = Date.now()
    const curStats = Object.assign({}, this.state)
    
    // Inc total
    const total = curStats.total + 1
    
    // Calculate time-based stats
    const rawPerSec = total / ((curTime - curStats.start) / 1000)
    const perSec = Math.ceil(rawPerSec)
    const perMinute = Math.ceil(rawPerSec * 60)
    const perHour = Math.ceil(rawPerSec * 3600)
    
    // Calculate totals
    const emojis = data.emojis.length 
      ? curStats.emojis + data.emojis.length
      : curStats.emojis
      
    const hashtags = data.hashtags.length
      ? curStats.hashtags + data.hashtags.length
      : curStats.hashtags
      
    const links = data.urls.length
      ? curStats.links + data.urls.length
      : curStats.links
    
    let images = curStats.images  
    if (data.domains.length) {
      data.domains.forEach((d) => {
        console.log(d)
        if (d && d.indexOf('pic.twitter.com') >= 0) {
          images + 1
        }
      })
    }
    
    // Set state
    this.setState({ total, perSec, perMinute, perHour, emojis, hashtags, links, images })
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
        <ListGroupItem>
          <strong>{this.state.emojis}</strong> Emojis
          ({ Math.ceil((this.state.emojis/this.state.total) * 100) || 0 }%)
        </ListGroupItem>
        <ListGroupItem>
          <strong>{this.state.hashtags}</strong> Hashtags 
          ({ Math.ceil((this.state.hashtags/this.state.total) * 100) || 0 }%)
        </ListGroupItem>
        <ListGroupItem>
          <strong>{this.state.links}</strong> Links 
          ({ Math.ceil((this.state.links/this.state.total) * 100) || 0 }%)
        </ListGroupItem>
        <ListGroupItem>
          <strong>{this.state.images}</strong> Images 
          ({ Math.ceil((this.state.images/this.state.total) * 100) || 0 }%)
        </ListGroupItem>
      </ListGroup>
    )
  }
}
