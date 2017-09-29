const { Transform } = require('stream')

/**
 * Filters hashtag data from stream
 */
module.exports = class HashtagsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Processes data chunk and extracts hashtags from a tweet, adding to collection
   * which is pushed down-stream
   * @param {Object} data Current stream chunk
   * @param {String} encoding Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, encoding, cb) {
    const regexp = /(\s|^)#\w\w+\b/gm
    const matches = data.tweet.match(regexp)
    data.hashtags = matches ? matches.map((h) => h.trim().replace('#', '')) : []
    this.push(data)
    cb()
  }
}
