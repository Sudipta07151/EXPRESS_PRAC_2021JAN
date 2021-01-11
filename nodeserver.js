const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h1>HI FROM PORT 4000</h1>`)
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`<h4 align="center">SORRY NOT FOUND</h1>`)
    }
    res.end()
})

server.listen(4000)
