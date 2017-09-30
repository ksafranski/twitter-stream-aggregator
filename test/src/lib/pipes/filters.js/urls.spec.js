const URLsFilter = require('src/lib/pipes/filters/urls')

const fixtures = {
  hasURLs: {
    tweet: 'tweet https://www.google.com tweet http://www.twitter.com/foo'
  },
  noURLs: {
    tweet: 'tweet tweet'
  }
}

describe('URLsFilter', () => {
  describe('_transform', () => {
    it('adds array of all urls in a tweet to property `urls`', (done) => {
      const inst = new URLsFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has URLs
      inst._transform(fixtures.hasURLs, null, () => {
        expect(spy.firstCall.args[0].urls)
          .to.deep.equal([ 'https://www.google.com', 'http://www.twitter.com/foo' ])
        expect(spy.firstCall.args[0].domains)
          .to.deep.equal([ 'www.google.com', 'www.twitter.com' ])
        done()
      })
    })
    it('adds empty array to property `urls` if nor urls are found', (done) => {
      const inst = new URLsFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has URLs
      inst._transform(fixtures.noURLs, null, () => {
        expect(spy.firstCall.args[0].urls)
          .to.deep.equal([])
        expect(spy.firstCall.args[0].domains)
          .to.deep.equal([])
        done()
      })
    })
  })
})
