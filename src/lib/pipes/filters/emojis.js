/* eslint no-cond-assign: 0 */
const { Transform } = require('stream')
const regex = require('emoji-regex')()

/**
 * Filters emoji data from stream
 */
module.exports = class EmjoisFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Processes data chunk and extracts emojis from a tweet, adding to collection
   * which is pushed down-stream
   * @param {Object} data Current stream chunk
   * @param {String} encoding Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, encoding, cb) {
    data.emojis = data.tweet.match(regex) || []
    this.push(data)
    cb()
  }
}
