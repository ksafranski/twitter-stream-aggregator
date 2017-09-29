const { Transform } = require('stream')
const urlExpander = require('../../utils/url_expander')

module.exports = class URLsFilter extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  _transform (data, encoding, cb) {
    const urls = data.tweet.match(/\bhttps?:\/\/\S+/gi) || []
    urlExpander(urls).then((expandedUrls) => {
      data.urls = expandedUrls
      this.push(data)
      cb()
    })
  }
}
