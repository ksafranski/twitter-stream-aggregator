const { Transform } = require('stream')

/**
 * Outputs current stream data to console
 */
module.exports = class Echo extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Writes data to console
   * @param {Object} data The data to output
   * @param {String} enc Data encoding
   * @param {Function} cb Callback
   */
  _transform (data, enc, cb) {
    console.log(data)
    this.push(data)
    cb()
  }
}
