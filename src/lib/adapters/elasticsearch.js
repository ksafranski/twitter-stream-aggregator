const path = require('path')
const elasticsearch = require('elasticsearch')
module.exports = new elasticsearch.Client({
  host: `${process.env.ES_CONN}:${process.env.ES_PORT}`,
  log: [{
    type: 'file',
    path: path.resolve(process.cwd(), './elasticsearch.log')
  }]
})
