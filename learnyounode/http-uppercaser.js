var http = require('http'),
    fs = require('fs');

var port = parseInt(process.argv[2]) || 8080;

var server = http.createServer(function (req, res) {
    if (req.method === 'GET') return;
    res.writeHead(200, { 'content-type': 'text/plain' });
    req.on('data', function (chunk) {
        res.write(chunk.toString('utf8').toUpperCase());
    });
    req.on('end', function (chunk) {
        res.end(chunk);
    })
});

server.listen(port);
