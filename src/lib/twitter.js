const request = require('request')
const Chunker = require('./pipes/chunker')
const Echo = require('./pipes/echo')

module.exports = () => {

  const req = request({
    headers: {
      'User-Agent': 'test-app, node.js',
      'content-length': '0'
    },
    method: 'get',
    url: 'https://stream.twitter.com/1.1/statuses/sample.json',
    oauth: {
      consumer_key : process.env.TWITTER_CONSUMER_KEY,
      consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
      token : process.env.TWITTER_ACCESS_TOKEN_KEY,
      token_secret : process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
  })

  req
    .pipe(new Chunker())
    .pipe(new Echo())
    
  req.on('response', (res) => {
    if (res.statusCode !== 200) {
      throw new Error(`Connection failed with ${res.statusCode}`)
    }
  })
  
  req.on('error', (err) => {
    throw new Error(`Connection failed: ${err.message}`)
  })
}
