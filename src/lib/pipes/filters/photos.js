const { Transform } = require('stream')

/**
 * Filters photo data from stream
 */
module.exports = class HashtagsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Processes data chunk and extracts photos from a tweet, adding to collection
   * which is pushed down-stream
   * @param {Object} data Current stream chunk
   * @param {String} encoding Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, encoding, cb) {
    data.photos = []
    if (data.entities.media && data.entities.media.length) {
      data.entities.media.forEach((m) => {
        /* istanbul ignore else */
        if (m.type === 'photo') data.photos.push(m.media_url)
      })
    }
    this.push(data)
    cb()
  }
}
