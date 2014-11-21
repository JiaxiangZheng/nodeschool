var fs = require('fs'),
    path = require('path');

function walkdir(dirname, extname, callback) {
    fs.readdir(dirname, function (err, list) {
        if (err) {
            callback(err, [])
            return
        } 
        list = list.filter(function (filename) {
            return path.extname(filename) === extname
        });
        callback(null, list);
    })
}

module.exports = walkdir
