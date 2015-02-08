var express = require('express'),
    path = require('path'),
    app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()});
}).listen(process.argv[2]);
