const request = require('request')
const Chunker = require('./pipes/chunker')
const Echo = require('./pipes/echo')
const requireDir = require('require-dir')

const filters = requireDir('./pipes/filters')

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
   * Initializes stream and dynamically applies pipes/filters based on opts
   * @param {Object} opts Options for stream
   * @param {Array} opts.filters Collection of {string} filter names
   * @param {Boolean} opts.debug Bool to indicate if stream should log out
   * @returns {Object} readable stream
   */
  /* istanbul ignore next */
  stream: (opts = { filters: [ 'hashtags' ], debug: false }) => {
    // Object from readable twitter http stream
    let stream = twitter.req()

    // Define placeholder for pipes to be added dynamically
    const pipes = []

    // Add chunker to chunk original stream
    pipes.push(new Chunker())

    // Dynamically add filters from opts
    opts.filters.forEach((filter) => {
      /* istanbul ignore next */
      if (!filters[filter]) throw new Error(`Filter does not exist: ${filter}`)
      pipes.push(new filters[filter]())
    })

    // If dubug is turned on, add echo pipe
    /* istanbul ignore next */
    if (opts.debug) pipes.push(new Echo())

    // Loop over and add all pipes
    pipes.forEach((p) => {
      stream = stream.pipe(p)
    })

    return stream
  }
}

module.exports = twitter
