let http = require('http')

const processArguments = process.argv
const url = processArguments[2]

http.get(url, function(response) {
  response.setEncoding('utf8')
  response.on('data', function(data) {
    console.log(data)
  })
  response.on('error', function(error) {
    console.log(error)
  })
})
