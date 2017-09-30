const twitter = require('./lib/twitter')

twitter.stream({
  filters: [
    'emojis',
    'hashtags',
    'urls'
  ],
  debug: true
})
