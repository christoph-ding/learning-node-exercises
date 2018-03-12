let http = require('http')
let url = require('url')

const processArguments = process.argv
const targetSocket = processArguments[2]

let server = require('http').createServer(function(req, res) {
  console.log('listening on: ', targetSocket)
})

function urlContains(url, substring) {
  return url.indexOf(substring) > -1
}

function generateISOJSON(url) {
  let date = new Date(url.query.iso)

  let generatedJSON = {
    hour: date.getHours(),
    minute: date.getMinutes() ,
    second: date.getSeconds()
  }
  return generatedJSON
}

function generateUNIXTime(url) {
  let date = new Date(url.query.iso)
  let generatedJSON = {
    unixtime: date.getTime()
  }
  return generatedJSON
}

server.on('request', function(req, res) {
  let parsedURL = url.parse(req.url, true)
  let pathname = parsedURL['pathname']
  let search = parsedURL['search']

  let relevantJSON

  // iso time
  if (urlContains(pathname, 'parsetime')) {
    relevantJSON = generateISOJSON(parsedURL)
  } else if (urlContains(pathname, 'unixtime')) {
    relevantJSON = generateUNIXTime(parsedURL)
  }

  res.end(JSON.stringify(relevantJSON))
})

server.listen(targetSocket)

// require('http').createServer(function(request, response) {

//   let parsedURL = url.parse(request.url)
//   let pathname = parsedURL['pathname']
//   let search = parsedURL['search']

//   // testing logging
//   console.log('url: ', request.url)
//   console.log('pathname: ', pathname) 
//   console.log('search: ', search)

//   response.end()
// }).listen(targetSocket)
