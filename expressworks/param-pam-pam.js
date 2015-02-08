var express = require('express'),
    path = require('path'),
    app = express();

// express允许我们使用模式串进行路由匹配
app.put('/message/:id', function (req, res) {
    var id = req.params.id;
    res.end(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex'));
});

app.listen(process.argv[2]);
