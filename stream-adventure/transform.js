var through = require("through");
var tr = through(function (chunk) {
    // write
    this.queue(chunk.toString().toUpperCase());
}, function () {
    // end
    this.queue(null);
});

process.stdin.pipe(tr).pipe(process.stdout)
