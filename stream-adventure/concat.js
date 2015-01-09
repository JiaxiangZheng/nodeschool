var concat = require('concat-stream')

var text;
process.stdin.pipe(concat(function (body) {
    text = body.toString().split('').reverse().join('');
    console.log(text)
}));
