const Readable = require('stream').Readable
const inherits = require('util').inherits

function Source (data, options) {
  Readable.call(this, options)
  // this.content = 'The quick brown fox jumps over the lazy dog.'
  this.content = data
}

inherits(Source, Readable)

Source.prototype._read = function (size) {
  if (!this.content) {
    this.push(null)
  } else {
    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

module.exports = Source
