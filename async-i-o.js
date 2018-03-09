let fs = require('fs')

const processArguments = process.argv
const filePath = processArguments[2]

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  }
  let numberOfLines = data.split('\n').length - 1
  console.log(numberOfLines)
})
