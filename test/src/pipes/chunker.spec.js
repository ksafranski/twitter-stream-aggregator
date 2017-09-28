const Chunker = require('src/lib/pipes/chunker')
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')

describe('Chunker', () => {
  describe('_transform', () => {
    it('breaks apart twitter streams into chunks', (done) => {
      const chunker = new Chunker()
      const spy = sandbox.spy(chunker, 'push')
      chunker._transform('{"text":"bar"}\r\n{"text":"buzz"}', null, () => {
        expect(spy.firstCall.args[0]).to.deep.equal(JSON.stringify({ text: 'bar' }))
        done()
      })
    })
  })
  describe('_flush', () => {
    it('flushes remainder from decoder', (done) => {
      const chunker = new Chunker()
      const spy = sandbox.spy(chunker, 'push')
      sandbox.stub(decoder, 'end').returns('{"text": "bar"}')
      chunker._flush(() => {
        expect(spy).to.be.calledOnce()
        done()
      })
    })
  })
})
