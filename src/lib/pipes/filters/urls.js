const { Transform } = require('stream')
const { URL } = require('url')

/**
 * Parses hostname from URL, will swallow errors with the URL util
 * @param {String} url The URL to parse
 * @returns {String}
 */
const getHostname = (url) => {
  try {
    return new URL(url).hostname
  } catch (e) { /* swallow */ }
}

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
    data.urls = []
    data.domains = []
    if (data.entities.urls && data.entities.urls.length) {
      data.entities.urls.forEach((u) => {
        data.urls.push(u.expanded_url)
        data.domains.push(getHostname(u.expanded_url))
      })
    }
    this.push(data)
    cb()
  }
}
