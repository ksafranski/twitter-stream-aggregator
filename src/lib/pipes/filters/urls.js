const { Transform } = require('stream')
const urlExpander = require('../../utils/url_expander')

/**
 * Filters url data from stream
 */
module.exports = class URLsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Processes data chunk and extracts urls from a tweet, adding to collection
   * which is pushed down-stream
   * @param {Object} data Current stream chunk
   * @param {String} encoding Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, encoding, cb) {
    const urls = data.tweet.match(/\bhttps?:\/\/\S+/gi) || []
    urlExpander(urls).then((expandedUrls) => {
      data.urls = expandedUrls
      this.push(data)
      cb()
    })
  }
}
