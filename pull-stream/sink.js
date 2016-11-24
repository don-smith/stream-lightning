function sink (read) {
  read(null, function next (err, data) {
    if (err) return console.log(err)
    process.stdout.write(data)
    // recursively call read again!
    read(null, next)
  })
}

module.exports = sink
