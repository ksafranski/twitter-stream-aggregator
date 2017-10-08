const { Transform } = require('stream')
const crypto = require('crypto')

const esIndex = process.env.ES_DEFAULT_INDEX || 'twitter'

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
      index: esIndex,
      type: 'chunk',
      id: crypto.randomBytes(20).toString('hex'),
      body: data
    }
    // Simplify our data
    if (record.body.entities) delete record.body.entities
    // Add timestamp
    record.body.timestamp = Date.now()
    this.push(record)
    cb()
  }
}
