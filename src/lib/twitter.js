const request = require('request')
const Chunker = require('./pipes/chunker')
const Echo = require('./pipes/echo')

const twitter = {
  /**
   * Creates HTTP stream from twitter api
   * @returns {Object} Readable stream
   */
  req: () => {
    const req = request.get({
      headers: {
        'User-Agent': 'twitter-stream-app',
        'Content-Length': '0'
      },
      url: `https://stream.twitter.com/1.1/statuses/sample.json`,
      oauth: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        token: process.env.TWITTER_ACCESS_TOKEN_KEY,
        token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      }
    })

    req.on('response', (res) => {
      /* istanbul ignore else */
      if (res.statusCode !== 200) {
        req.emit('error', new Error(`Connection failed with ${res.statusCode}`))
      }
    })

    return req
  },

  /**
   * Initializes stream and pipes
   */
  stream: () => {
    return twitter.req()
      .pipe(new Chunker())
      .pipe(new Echo())
      .on('error', (err) => {
        throw new Error(`Stream failed: ${err.message}`)
      })
  }
}

module.exports = twitter
