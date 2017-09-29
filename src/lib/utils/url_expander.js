const unshort = require('url-unshort')()
const Promise = require('bluebird')

/**
 * Checks for an expands any t.co urls
 * @params {Array} urls Collection of URLs to expand
 * @return {Object.<Promise>}
 */
module.exports = (urls) => Promise.map(urls, (url) => {
  return unshort.expand(url)
    .then((expanded) => {
      return expanded || url
    })
})
