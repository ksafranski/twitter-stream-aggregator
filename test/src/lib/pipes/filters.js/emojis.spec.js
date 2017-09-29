const EmojisFilter = require('src/lib/pipes/filters/emojis')

const fixture = {
  tweet: '\u{1F3F4}foo\u{1F469}bar'
}

describe('EmojisFilter', () => {
  describe('_transform', () => {
    it('adds array of all emojis in a tweet to property `emojis`', () => {
      const inst = new EmojisFilter()
      const spy = sandbox.spy(inst, 'push')
      inst._transform(fixture, null, () => {
        expect(spy.firstCall.args[0].emojis)
          .to.deep.equal([ '\u{1F3F4}', '\u{1F469}' ])
      })
    })
  })
})
