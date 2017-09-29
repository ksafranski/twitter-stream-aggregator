const { Transform } = require('stream')

/**
 * Filters photo data from stream
 */
module.exports = class PhotosFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Processes data chunk and extracts photo urls from a tweet, adding to collection
   * which is pushed down-stream
   * @param {Object} data Current stream chunk
   * @param {String} encoding Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, encoding, cb) {
    data.photos = []
    this.push(data)
    cb()
  }
}
