let http = require('http')
let url = require('url')

const processArguments = process.argv
const targetSocket = processArguments[2]

let server = require('http').createServer(function(req, res) {
  console.log('listening on: ', targetSocket)
})

// server.on('request', function(req, res) {
//   console.log('2nd step')
// })

function urlContains(url, substring) {
  return url.indexOf(substring) > -1
}

function generateISOJSON(url, )


server.on('request', function(req, res) {
  console.log('got something')

  let parsedURL = url.parse(req.url)
  let pathname = parsedURL['pathname']
  let search = parsedURL['search']

  // testing logging
  console.log('url: ', req.url)
  console.log('pathname: ', pathname) 
  console.log('search: ', search)

  // iso time
  if (urlContains(pathname, 'parsetime')) {
    console.log('... parsing time ...')
  }

  res.end('yo')
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
