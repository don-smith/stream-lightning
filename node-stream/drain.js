const Writable = require('stream').Writable
const inherits = require('util').inherits

function Drain (options) {
  Writable.call(this, options)
}

inherits(Drain, Writable)

Drain.prototype._write = function (chunk, encoding, callback) {
  console.log('*', chunk.toString(), '\n')
  callback()
}

module.exports = Drain
