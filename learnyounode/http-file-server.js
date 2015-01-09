var http = require('http'),
    fs = require('fs');

var port = parseInt(process.argv[2]) || 8080,
    filename = process.argv[3] || "hello-world.js";

var server = http.createServer(function (req, res) {
    // get file
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(filename).pipe(res);
});
server.listen(port);
