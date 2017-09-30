const Echo = require('src/lib/pipes/echo')

describe('Echo', () => {
  describe('_transform', () => {
    it('writes data to console', () => {
      const inst = new Echo()
      const pushSpy = sandbox.spy(inst, 'push')
      const logSpy = sandbox.spy(console, 'log')
      inst._transform({ text: 'foo' }, null, () => {
        expect(pushSpy).to.be.calledWith({ text: 'foo' })
        expect(logSpy).to.be.calledWith({ text: 'foo' })
      })
    })
  })
})
