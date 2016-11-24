const Source = require('./source')
const data = require('../data')

const source = new Source(data)

source.on('data', (chunk) => {
  console.log(chunk.toString())
})

source.on('end', () => console.log('All done'))
