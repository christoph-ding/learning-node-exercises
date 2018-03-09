let fs = require('fs')

const processArguments = process.argv
const filePath = processArguments[2]

let data = fs.readFileSync(filePath, 'utf-8')
console.log(data.split('\n').length - 1)
