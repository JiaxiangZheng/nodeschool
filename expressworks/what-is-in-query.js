var express = require('express'),
    url = require('url'),
    querystring = require('querystring'),
    app = express();


app.get('/search', function (req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.listen(process.argv[2] || 3000);
