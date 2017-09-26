const index = require('src/index')

describe('index', () => {
  it('adds two variables and returns sum', () => {
    expect(index(5, 10)).to.equal(15)
  })
})
