/* eslint no-cond-assign: 0 */
const { Transform } = require('stream')
const regex = require('emoji-regex')()

module.exports = class EmjoisFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    data.emojis = data.tweet.match(regex) || []
    this.push(data)
    cb()
  }
}
