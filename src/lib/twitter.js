const Twitter = require('twitter')

// Create new Twitter connection client
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports = () => {
  const stream = client.stream('statuses/sample');
  stream.on('data', (event) => {
    console.log('---')
    console.log(event.text)
  })
   
  stream.on('error', (error) => {
    throw error
  })
}