const { Transform } = require('stream')
const crypto = require('crypto')

/**
 * Outputs current stream data to console
 */
module.exports = class ESTransform extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Transforms data to ElasticSearch writable format
   * @param {Object} data The data to transform
   * @param {String} enc Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, enc, cb) {
    const record = {
      index: 'twitter',
      type: 'chunk',
      id: crypto.randomBytes(20).toString('hex'),
      body: data
    }
    this.push(record)
    cb()
  }
}
