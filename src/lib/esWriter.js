const esClient = require('./adapters/elasticsearch')
const ESTransform = require('./pipes/esTransform')
const ElasticsearchWritableStream = require('elasticsearch-writable-stream')
const ora = require('ora')

console.log('--- ELASTICSEARCH ---')
const indicator = ora().start('Connecting to ElasticSearch')
let attempts = 0

/**
 * Ensures (waits for) connection to ES, then pipes inputStream to
 * ES writer instance
 * @param {Object} inputStream stream to pipe to ES
 */
const writeToES = (inputStream) => {
 // Check connection
  esClient.ping().then(() => {
    // Connection established, pipe...
    indicator.succeed('Connected to ElasticSearch')
    inputStream
      .pipe(new ESTransform())
      .pipe(new ElasticsearchWritableStream(esClient, {
        highWaterMark: 256,
        flushTimeout: 500
      }))
  }).catch(() => {
    // Check attempts at connection
    if (attempts < 30) {
      // Not yet, retry on 500ms
      attempts++
      return setTimeout(() => writeToES(inputStream), 500)
    }
    // Ran out of attempts, exit with code 1
    indicator.fail('Could not connect to ElasticSearch')
    process.exit(1)
  })
}

module.exports = writeToES
