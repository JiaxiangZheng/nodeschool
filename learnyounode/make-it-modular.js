var dirname = process.argv[2],
    extname = process.argv[3];

var walkdir = require('./walkdir');

walkdir(dirname, '.' + extname, function (err, list) {
    if (err) {
        console.error("read dir error")
    } else {
        list.forEach(function (filename) {
            console.log(filename);
        });
    }
});
