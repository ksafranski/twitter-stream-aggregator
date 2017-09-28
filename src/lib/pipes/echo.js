const { Writable } = require('stream')

/**
 * Outputs current data to console
 */
module.exports = class Echo extends Writable {
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
  _write(data, enc, cb) {
    console.log(data)
    cb()
  }
}