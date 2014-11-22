var net = require('net');

var port = parseInt(process.argv[2]) || 8080;

var getTime = function () {
    var time = "";
    var date = new Date();
    time += date.getFullYear();
    time += "-";
    time += ('0' + (date.getMonth() + 1)).slice(-2);
    time += "-";
    time += date.getDate();
    time += " ";
    time += ('0' + date.getHours()).slice(-2);
    time += ":";
    time += ('0' + date.getMinutes()).slice(-2);
    return time;
}; 
var server = net.createServer(function (socket) {
    socket.write(getTime() + "\n");
    socket.end();
});
server.listen(port);
