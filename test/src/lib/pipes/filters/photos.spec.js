const PhotosFilter = require('src/lib/pipes/filters/photos')

const fixtures = {
  hasPhotos: {
    tweet: 'tweet https://www.imgur.com/image.jpg tweet',
    entities: {
      media: [
        {
          media_url: 'https://www.imgur.com/image.jpg',
          type: 'photo'
        }
      ]
    }
  },
  noPhotos: {
    tweet: 'tweet tweet',
    entities: {}
  }
}

describe('PhotosFilter', () => {
  describe('_transform', () => {
    it('adds array of all photos in a tweet to property `photos`', (done) => {
      const inst = new PhotosFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has Photos
      inst._transform(fixtures.hasPhotos, null, () => {
        expect(spy.firstCall.args[0].photos)
          .to.deep.equal([ 'https://www.imgur.com/image.jpg' ])
        done()
      })
    })
    it('adds empty array to property `photos` if nor photos are found', (done) => {
      const inst = new PhotosFilter()
      const spy = sandbox.spy(inst, 'push')
      // Has Photos
      inst._transform(fixtures.noPhotos, null, () => {
        expect(spy.firstCall.args[0].photos)
          .to.deep.equal([])
        done()
      })
    })
  })
})
