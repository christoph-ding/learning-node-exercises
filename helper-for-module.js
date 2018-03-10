let fs = require('fs')
let path = require('path')

let filterDirectory = function(directoryName, extension, callback) {
  let formattedExtension = '.' + extension
  let results = []

  fs.readdir(directoryName, (err, files) => {
    if (err) {
      return callback(err)
    }

    files.forEach((file) => {
      if (path.extname(file) === formattedExtension) {
        results.push(file)
      }
    })

    callback(null, results)    
  })
}

module.exports = filterDirectory
