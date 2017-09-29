const { Transform } = require('stream')

module.exports = class PhotosFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    data.photos = []
    this.push(data)
    cb()
  }
}
