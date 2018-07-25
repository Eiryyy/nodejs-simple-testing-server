const http = require('http')
const url = require('url')
http.createServer((req, res) => {
  const { query } = url.parse(req.url, true)
  const json = {
    counter: +query.c
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(json))
}).listen(8081)
