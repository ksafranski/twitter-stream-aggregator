const { Transform } = require('stream')

module.exports = class HashtagsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    data.hashtags = []
    this.push(data)
    cb()
  }
}
