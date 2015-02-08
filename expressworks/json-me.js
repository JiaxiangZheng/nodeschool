var express = require('express'),
    fs = require('fs'),
    querystring = require('querystring'),
    app = express();


app.get('/books', function (req, res) {
    fs.readFile(process.argv[3] || 'public/index.html', function (err, data) {
        if (err) {
            res.end('404');
            return;
        }
        var object = JSON.parse(data.toString());
        res.end(JSON.stringify(object));
    });
});

app.listen(process.argv[2] || 3000);
