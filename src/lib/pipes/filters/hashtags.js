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
    data.hashtags = data.entities.hashtags && data.entities.hashtags.length
      ? data.entities.hashtags.map((h) => h.text)
      : []
    this.push(data)
    cb()
  }
}
