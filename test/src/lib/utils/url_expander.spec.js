const urlExpander = require('src/lib/utils/url_expander')

const fixture = [
  'https://t.co/5N4OJjxjMI',
  'https://www.google.com',
  'https://not-a-real-working-url.com'
]

describe('url_expander', () => {
  it('expands any shortened urls in array', () => {
    return urlExpander(fixture)
      .then((results) => {
        expect(results).to.deep.equal([
          'https://github.com/binci/binci/blob/master/src/index.js',
          'https://www.google.com',
          'https://not-a-real-working-url.com'
        ])
      })
  })
})
