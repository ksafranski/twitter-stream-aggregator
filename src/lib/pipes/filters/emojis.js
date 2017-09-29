const { Transform } = require('stream')
/* eslint no-cond-assign: 0 */
const regex = require('emoji-regex')()

module.exports = class EmjoisFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    let match
    const emojis = []
    while (match = regex.exec(data.tweet)) {
      /* istanbul ignore else */
      if (match[0]) emojis.push(match[0])
    }
    data.emojis = emojis
    this.push(data)
    cb()
  }
}
