let fs = require('fs')

const processArguments = process.argv
const targetSocket = processArguments[2]
const filePath = processArguments[3]

require('http').createServer(function(request, response) {
  let data = fs.readFileSync(filePath, 'utf-8')
  response.write(data)
  response.end()
}).listen(targetSocket)
