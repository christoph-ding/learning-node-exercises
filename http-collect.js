let http = require('http')

const processArguments = process.argv
const url = processArguments[2]

http.get(url, function(response) {
  const allData = []

  response.setEncoding('utf8')

  response.on('data', function(data) {
    allData.push(data)
  })
  response.on('error', function(error) {
    console.log(err)
  })
  response.on('end', function() {
    // console.log(allData.length)
    console.log(allData.join('').split('').length)
    console.log(allData.join(''))
  })


  // stream.on('end', () => resolve(Buffer.concat(buffers))
})
