const { Transform } = require('stream')

module.exports = class URLsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    // @TODO expand url via request (method: HEAD), then check response.request.href
    data.urls = data.tweet.match(/\bhttps?:\/\/\S+/gi) || []
    this.push(data)
    cb()
  }
}
