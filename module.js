const processArguments = process.argv
const directory = processArguments[2]
const extension = processArguments[3]

const readFile = require('./helper-for-module.js')

let printOut = function(err, list) {
  if (err) {
    return console.log(err)
  }

  list.forEach((elem) => {
    console.log(elem)
  })
}

readFile(directory, extension, printOut)
