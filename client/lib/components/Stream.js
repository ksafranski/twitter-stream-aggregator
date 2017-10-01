import React from 'react'

// Turns out this is a real pain to load as module, see <script> tags :\
// const io = window.io
import io from 'socket.io-client'

export default class Stream extends React.Component {
  constructor (props, ctx) {
    super(props)

    // Initial state
    this.state = {
      tweets: []
    }

    // Create socket connection
    const socket = io.connect()

    // Save from overloading the DOM
    const maxTweets = 30

    // Handle events
    socket.on('twitter', (data) => {
      let curTweets = this.state.tweets

      // Continue to slice to prevent overload
      curTweets = curTweets.length > maxTweets
        ? curTweets.slice(curTweets.length - maxTweets)
        : curTweets

      // Push new tweet
      curTweets.push(data.tweet)

      // Set state
      this.setState({
        tweets: curTweets
      })
    })
  }

  render () {
    return (
      <ul className='tweet-stream'>
        {this.state.tweets.map((t, i) => (
          <li key={i++}>{t}</li>
        ))}
      </ul>
    )
  }
}
