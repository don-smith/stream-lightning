const source = require('./source')
const sink = require('./sink')
const data = require('../data')

sink(source(data))
