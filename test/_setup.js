const path = require('path')
const chai = require('chai')
const sinon = require('sinon')
const schai = require('sinon-chai')
const dchai = require('dirty-chai')
const mod = require('module')

// Set globals
global.sinon = sinon
global.expect = chai.expect

// Chai config
chai.use(schai)
chai.use(dchai)

// Allows pathing from root
process.env.NODE_PATH = path.join(__dirname, '..') + path.delimiter + (process.env.NODE_PATH || '')
mod._initPaths()
