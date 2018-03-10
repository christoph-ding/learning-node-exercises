let http = require('http')

const processArguments = process.argv
const urls = processArguments.slice(2)

const allResponseData = []
let completed = 0


urls.forEach((url, index) => {
  http.get(url, function(response) {
    const responseData = []

    // 'reserve' the spot in all responseData
    allResponseData[index] = ''
    
    response.setEncoding('utf8')

    response.on('data', function(data) {
      responseData.push(data)
    })
    response.on('end', function() {
      allResponseData[index] = responseData.join('')
      completed++

      if (completed === urls.length) {
        allResponseData.forEach(function(concatedData) {
          console.log(concatedData)
        })
      }
    })
  })
})
