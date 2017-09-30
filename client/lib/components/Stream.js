import React from 'react'

// Turns out this is a real pain to load as module, see <script> tags :\
const io = window.io

export default class Stream extends React.Component {
  constructor (props, ctx) {
    super(props)

    const socket = io.connect()

    socket.on('twitter', (data) => {
      console.log(data)
    })
  }

  render () {
    return (
      <div>Stream...</div>
    )
  }
}
