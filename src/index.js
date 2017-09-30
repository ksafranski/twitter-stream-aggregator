const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const twitter = require('./lib/twitter')

const PORT = process.env.PORT || 8080
const CLIENT_PATH = path.resolve(__dirname, '../client')

twitter.stream({
  filters: [
    'emojis',
    'hashtags',
    'urls'
  ],
  debug: false
}).on('data', (data) => {
  return null
})

// Listen on PORT
server.listen(PORT)

// Serve static (client app)
app.use(express.static(CLIENT_PATH))

// Establish socket connections
io.on('connection', (socket) => {
  socket.emit('twitter', { hello: 'world' })
})

// Log out to indicate server start
console.log(`Service running over ${PORT}`)
