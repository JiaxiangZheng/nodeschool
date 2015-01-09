var split = require('split'),
    through = require('through');

var odd = 1;

process.stdin.pipe(split()).pipe(through(function (buf) {
    if (odd % 2 === 1) {
        this.queue(buf.toString().toLowerCase() + '\n')
    } else {
        this.queue(buf.toString().toUpperCase() + '\n')
    }
    odd++;
}, function () {
    this.queue(null);
})).pipe(process.stdout);


