const twitter = require('src/lib/twitter')
const request = require('request')
const EventEmitter = require('events')
const { Readable } = require('stream')

describe('twitter', () => {
  describe('req', () => {
    // Taking an integration-style approach here to ensure API compatibility
    // without writing an actual integration/system test suite
    it('establishes http connection and returns a readable stream', () => {
      expect(twitter.req().pipe).to.be.a('function')
    })
    it('emits error if response is non-200', (done) => {
      sandbox.stub(request, 'get').callsFake(() => new EventEmitter())
      const inst = twitter.req()
      inst.on('error', (err) => {
        expect(err.message).to.equal('Connection failed with 400')
        done()
      })
      inst.emit('response', { statusCode: 400 })
    })
  })
  describe('stream', () => {
    it('returns a stream from the twitter http api', () => {
      expect(twitter.stream().writable).to.be.true()
    })
  })
})
