const twitter = require('src/lib/twitter')
const request = require('request')
const EventEmitter = require('events')

describe('twitter', () => {
  describe('req', () => {
    // Note: using integration tests here for better visibility into _actual_
    // process of establishing stream in lieu of a useless stub
    it('establishes http connection and returns a readable stream', () => {
      expect(twitter.req().pipe).to.be.a('function')
    })
    it('throws error if response is non-200', (done) => {
      sandbox.stub(request, 'get').callsFake(() => new EventEmitter())
      const inst = twitter.req()
      inst.on('error', (err) => {
        expect(err.message).to.equal('Connection failed with 400')
        done()
      })
      inst.emit('response', { statusCode: 400 })
    })
  })
})
