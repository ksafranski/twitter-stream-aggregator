const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const twitter = require('./lib/twitter')
const EventEmitter = require('events')

// Create emitter for twitter stream
class TwitterEmitter extends EventEmitter {}
const tweetStreamEvents = new TwitterEmitter()

const PORT = process.env.PORT || 8080
const CLIENT_PATH = path.resolve(__dirname, '../client')

// Start twitter stream
twitter.stream({
  filters: [
    'emojis',
    'hashtags',
    'urls'
  ],
  // Flip to `true` to see stream in console
  debug: false
}).on('data', (data) => {
  tweetStreamEvents.emit('data', data)
})

// Listen on PORT
server.listen(PORT)

// Serve static (client app)
app.use(express.static(CLIENT_PATH))

let numConnections = 0

// Establish socket connections
io.on('connection', (socket) => {
  // Increment connection counter
  numConnections++

  // Decrement connection counter, check if stream should stop
  socket.on('disconnect', () => {
    numConnections--
    if (numConnections <= 0) {
      console.log('No clients connected')
    }
  })

  // On twitter events, emit data
  tweetStreamEvents.on('data', (data) => {
    socket.emit('twitter', data)
  })
})

// Log out to indicate server start
console.log(`Service running over ${PORT}`)
