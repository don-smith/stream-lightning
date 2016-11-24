const Source = require('./source')
const Drain = require('./drain')
const data = require('../data')

// const source = new Source(data, {highWaterMark: 64})
const source = new Source(data)
const drain = new Drain()
source.pipe(drain)
