const { Transform } = require('stream')

module.exports = class HashtagsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    const regexp = /(\s|^)#\w\w+\b/gm
    const matches = data.tweet.match(regexp)
    data.hashtags = matches ? matches.map((h) => h.trim().replace('#', '')) : []
    this.push(data)
    cb()
  }
}
