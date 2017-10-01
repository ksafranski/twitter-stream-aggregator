const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const twitter = require('./lib/twitter')
const EventEmitter = require('events')

// Webpack hot reload
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/src'),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

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
  debug: true
}).on('data', (data) => {
  tweetStreamEvents.emit('data', data)
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
