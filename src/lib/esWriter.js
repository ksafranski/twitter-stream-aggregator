const esClient = require('./adapters/elasticsearch')
const ESTransform = require('./pipes/esTransform')
const ElasticsearchWritableStream = require('elasticsearch-writable-stream')
const ora = require('ora')

const esIndex = process.env.ES_DEFAULT_INDEX || 'twitter'

console.log('--- ELASTICSEARCH ---')
const indicator = ora().start('Connecting to ElasticSearch')
let attempts = 0

/**
 * Sets up twitter index in Kibana
 * @returns {Object.<Promise>}
 */
const setKibanaDefaults = () => esClient.create({
  index: '.kibana',
  type: 'index-pattern',
  id: esIndex,
  body: {
    title: esIndex,
    timeFieldName: 'timestamp'
  }
}).catch((e) => {
  console.log(`Could not setup Kibana: ${e.message}`)
  process.exit(1)
})

/**
 * Creates twitter index and mapping
 * @returns {Object.<Promise>}
 */
const createIndexMapping = () => esClient.indices.create({ index: esIndex })
  .then(() => esClient.indices.putMapping({
    index: esIndex,
    type: 'chunk',
    body: {
      properties: {
        timestamp: {
          type: 'date'
        }
      }
    }
  }))
  .then(setKibanaDefaults)
  .catch((e) => {
    console.log(`Failed to create index mapping: ${e.message}`)
    process.exit(1)
  })

/**
 * Creates pipe to ES index
 * @param {Object} inputStream stream to pipe to ES
 */
const pipeToES = (inputStream) => {
  // Connection established, pipe...
  indicator.succeed('Connected to ElasticSearch')
  inputStream
    .pipe(new ESTransform())
    .pipe(new ElasticsearchWritableStream(esClient, {
      highWaterMark: 256,
      flushTimeout: 500
    }))
}

/**
 * Ensures (waits for) connection to ES, then pipes inputStream to
 * ES writer instance
 * @param {Object} inputStream stream to pipe to ES
 */
const writeToES = (inputStream) => {
  // Check connection
  esClient.ping()
    .then(createIndexMapping)
    .then(() => pipeToES(inputStream))
    .catch(() => {
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
