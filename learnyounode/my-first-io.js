var fs = require('fs');

var filename = process.argv[2];
    buf = fs.readFileSync(filename),
    str = buf.toString('utf-8');

lines = str.split('\n');
lines.pop();
console.log(lines.length);
