const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const twitter = require('./lib/twitter')
const EventEmitter = require('events')

// dev: hot module reloader
require('./webpack_hmr')(app)

// Create emitter for twitter stream
class TwitterEmitter extends EventEmitter {}
const tweetStreamEvents = new TwitterEmitter()

const PORT = process.env.PORT || 8080
const CLIENT_PATH = path.resolve(__dirname, '../client')

/**
 * Starts twitter stream
 * @returns {Object} stream
 */
const startTwitterStream = () => twitter.stream({
  // Apply filters
  filters: [
    'emojis',
    'hashtags',
    'urls'
  ],
  // Flip to `true` to see stream in console
  debug: false
})

// Start Twitter Stream
let twitterStream = startTwitterStream()

// Handle data from stream
twitterStream.on('data', (data) => {
  tweetStreamEvents.emit('data', data)
})

// Handle errors from stream
twitterStream.on('error', (err) => {
  console.log(err)
})

// Listen on PORT
server.listen(PORT)

// Serve static (client app)
app.use(express.static(CLIENT_PATH))

// Establish socket connections
io.on('connection', (socket) => {
  // On twitter events, emit data
  tweetStreamEvents.on('data', (data) => {
    socket.emit('twitter', data)
  })
})

// Log out to indicate server start
console.log(`Service running over ${PORT}`)
