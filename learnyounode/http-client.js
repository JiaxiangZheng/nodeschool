var http = require('http');

var sURL = process.argv[2];

http.get(sURL, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
    response.on('end', function (data) {
        // process the end
    })
});


/*
// standard solution
http.get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on('data', console.log);
    response.on('error', console.error);
})
*/
