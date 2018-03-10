var moment = require('moment')

const processArguments = process.argv
const targetSocket = process.argv[2]

require('net').createServer(function(socket) {
  socket.end((moment().format('YYYY-MM-DD HH:mm') + '\n'))
}).listen(targetSocket)
