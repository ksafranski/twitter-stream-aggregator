const request = require('request')
const Chunker = require('./pipes/chunker')
const Echo = require('./pipes/echo')

const EmojisFilter = require('./pipes/filters/emojis')
const HashtagsFilter = require('./pipes/filters/hashtags')
const PhotosFilter = require('./pipes/filters/photos')
const URLsFilter = require('./pipes/filters/urls')

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
   * @returns {Object} readable stream
   */
  stream: () => {
    /* istanbul ignore next: best for an integration/system test */
    const stream = twitter.req()
      .pipe(new Chunker())
      .pipe(new EmojisFilter())
      .pipe(new HashtagsFilter())
      .pipe(new PhotosFilter())
      .pipe(new URLsFilter())
      // Echo is for visibility
      .pipe(new Echo())

    /**
     * Aggregation:
     * ---
     * Total number of tweets received
     * Average tweets per hour/minute/second
     * Top emojis in tweets
     * Percent of tweets that contains emojis
     * Top hashtags
     * Percent of tweets that contain a url
     * Percent of tweets that contain a photo url (pic.twitter.com or instagram)
     * Top domains of urls in tweets
     */

    /* istanbul ignore next: best for an integration/system test */
    stream.on('error', (err) => {
      throw new Error(`Stream error: ${err.message}`)
    })

    return stream
  }
}

module.exports = twitter
