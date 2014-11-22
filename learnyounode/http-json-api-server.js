var http = require('http'),
    url = require('url');

var port = parseInt(process.argv[2]) || 8080;

// can be simplified
var router = (function () {
    var handler = {};
    handler["/api/parsetime"] = function (query, res) {
        if (query.iso) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var time = new Date(query.iso);
            var obj = {
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            };
            res.end(JSON.stringify(obj));
        }
    };
    handler["/api/unixtime"] = function (query, res) {
        if (query.iso) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var time = new Date(query.iso);
            var obj = {
                unixtime: time.getTime()
            };
            res.end(JSON.stringify(obj));
        }
    };
    return {
        handle: function (req, res) {
            var urlInfo = url.parse(req.url, true);
            var fnHandler = handler[urlInfo.pathname];
            if (fnHandler) {
                fnHandler(urlInfo.query, res);
            }
        }
    };
}());
http.createServer(function (req, res) {
    router.handle(req, res);
}).listen(port);
