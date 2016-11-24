const source = require('./source')
const data = require('../data')

const read = source(data)

read(false, showChunk)

function showChunk (err, chunk) {
  if (!err) {
    process.stdout.write(chunk)
    read(false, showChunk)
  }
}
