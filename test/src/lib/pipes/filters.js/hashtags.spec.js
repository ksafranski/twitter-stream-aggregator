const HashtagsFilter = require('src/lib/pipes/filters/hashtags')

const fixtures = {
  hasHashtags: {
    tweet: 'tweet #foo tweet #bar'
  },
  noHashtags: {
    tweet: 'tweet tweet'
  }
}

describe('HashtagsFilter', () => {
  describe('_transform', () => {
    it('adds array of all hashtags in a tweet to property `hashtags`', () => {
      const inst = new HashtagsFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has hashtags
      inst._transform(fixtures.hasHashtags, null, () => {
        expect(spy.firstCall.args[0].hashtags)
          .to.deep.equal([ 'foo', 'bar' ])
      })
      // No hashtags
      spy.reset()
      inst._transform(fixtures.noHashtags, null, () => {
        expect(spy.firstCall.args[0].hashtags)
          .to.deep.equal([])
      })
    })
  })
})
