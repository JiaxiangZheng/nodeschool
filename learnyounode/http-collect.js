var http = require('http');

var sURL = process.argv[2];

http.get(sURL, function (response) {
    var chunks = ""; 
    response.setEncoding('utf8');
    response.on('data', function (data) {
        chunks += data;
    });
    response.on('end', function (data) {
        // process the end
        console.log(chunks.length);
        console.log(chunks);
    })
});
