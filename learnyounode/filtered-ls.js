var fs = require('fs'),
    path = require('path');

var pathname = process.argv[2],
    extname  = process.argv[3];

extname = '.' + extname;

fs.readdir(pathname, function (err, list) {
    if (err) {
        throw err;
        return;
    }
    
    // can be optimized with just one loop
    list.filter(function (filename) {
        return extname === path.extname(filename);
    }).forEach(function (filename) {
        console.log(filename);
    });
});
