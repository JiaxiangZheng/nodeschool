var http = require('http');
var slice = Array.prototype.slice;
var urls = slice.call(process.argv, 2);

// version 1: handle the request one by one
/*
var next = function (index) {
    var url = urls[index],
        contents = "";
    if (typeof url === 'undefined') return;
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            contents += chunk;
        });
        response.on('end', function (chunk) {
            console.log(contents);
            next(index+1);
        });
    });
};
next(0);
*/


// version 2: handle the request async, but print the result one by one
var responseResults = new Array(urls.length);
var nHandles = 0;
var print = function (index) {
    var url = urls[index],
        content = "";
    if (typeof url === 'undefined') return;
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            content += chunk;
        });
        response.on('end', function (chunk) {
            responseResults[index] = content;
            nHandles++;
            if (nHandles === 3) {
                responseResults.forEach(function (res) {
                    console.log(res);
                });
            }
        });
    });
    print(index + 1);
};
print(0);
