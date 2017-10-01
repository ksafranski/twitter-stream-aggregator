const { Transform } = require('stream')
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')

/**
 * Chunks data coming into pipeline to break at \r\n and
 * push objects
 */
module.exports = class Chunker extends Transform {
  constructor (opts = {}) {
    opts.objectMode = true
    super(opts)
  }

  /**
   * Transforms stream into chunks and objects
   * @param {Buffer} chunk Incoming stream chunk
   * @param {String} encoding Chunk encoding
   * @param {Function} cb Callback
   */
  _transform (chunk, encoding, cb) {
    /* istanbul ignore else */
    if (this._last === undefined) this._last = ''
    this._last += decoder.write(chunk)
    const items = this._last.split(/\r\n/)
    this._last = items.pop()
    items.forEach((item) => {
      let parsed
      try {
        parsed = JSON.parse(item)
      } catch (e) {}
      /* istanbul ignore else */
      if (parsed.text && typeof parsed.text === 'string') this.push({ tweet: parsed.text })
    })
    cb()
  }

  /**
   * Flushes remaining contents of decoder
   * @param {Function} cb Callback
   */
  _flush (cb) {
    this._last += decoder.end()
    /* istanbul ignore else */
    if (this._last) this.push(this, this._last)
    cb()
  }
}
