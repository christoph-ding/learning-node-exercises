let fs = require('fs')
let path = require('path')

const processArguments = process.argv
const directory = processArguments[2]

fs.readdir(directory, (err, list) => {
  list.forEach((file) => {
    if (path.extname(file) === '.md') {
      console.log(file)
    }
  })
})

