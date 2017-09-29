const EmojisFilter = require('src/lib/pipes/filters/emojis')

const fixtures = {
  hasEmojis: {
    tweet: '\u{1F3F4}tweet\u{1F469}tweet'
  },
  noEmojis: {
    tweet: 'tweet tweet'
  }
}

describe('EmojisFilter', () => {
  describe('_transform', () => {
    it('adds array of all emojis in a tweet to property `emojis`', () => {
      const inst = new EmojisFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has emojis
      inst._transform(fixtures.hasEmojis, null, () => {
        expect(spy.firstCall.args[0].emojis)
          .to.deep.equal([ '\u{1F3F4}', '\u{1F469}' ])
      })
      // No emojis
      spy.reset()
      inst._transform(fixtures.noEmojis, null, () => {
        expect(spy.firstCall.args[0].emojis)
          .to.deep.equal([])
      })
    })
  })
})
