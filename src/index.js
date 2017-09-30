const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
// const io = require('socket.io')(server)
// const twitter = require('./lib/twitter')

const PORT = process.env.PORT || 8080
const CLIENT_PATH = path.resolve(__dirname, '../client')

// twitter.stream({
//   filters: [
//     'emojis',
//     'hashtags',
//     'urls'
//   ],
//   debug: true
// })

// Listen on PORT
server.listen(PORT)

// Serve static (client app)
app.use(express.static(CLIENT_PATH))

// Log out to indicate server start
console.log(`Service running over ${PORT}`)
