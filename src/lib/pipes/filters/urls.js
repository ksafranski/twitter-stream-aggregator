const { Transform } = require('stream')

module.exports = class URLsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    data.urls = []
    this.push(data)
    cb()
  }
}
