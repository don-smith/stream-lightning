function source (ary) {
  let i = 0
  return function read (abort, cb) {
    if (i === ary.length || abort) return cb(true)
    cb(null, ary[i++])
  }
}

module.exports = source
