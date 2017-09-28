const Echo = require('src/lib/pipes/echo')

describe('Echo', () => {
  it('writes data to console', () => {
    const echo = new Echo()
    const spy = sandbox.spy(console, 'log')
    echo._write({ text: 'foo' }, null, () => {
      expect(spy).to.be.calledWith({ text: 'foo' })
    })
  })
})
