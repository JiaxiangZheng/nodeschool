var http = require('http'),
    through = require('through');

http.createServer(function (req, res) {
    req.pipe(through(function (data) {
        this.queue(data.toString().toUpperCase());
    }, function () {
        this.queue(null);
    })).pipe(res);
}).listen(parseInt(process.argv[2] || 8080))
