var express = require('express'),
    bodyparser = require('body-parser')
    path = require('path'),
    app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function (req, res) {
    req.body.str.split('').reverse().join('')
}).listen(process.argv[2]);
