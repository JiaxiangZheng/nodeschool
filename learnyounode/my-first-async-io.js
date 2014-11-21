var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, str) {
    if (err) {
        throw err;
        return;
    }
    lines = str.split('\n');
    lines.pop();
    console.log(lines.length);
});
