var level = require("level"),
    dbpath = process.argv[2];

var db = level(dbpath);

function getNext(index) {
    var key = "key" + index;
    db.get(key, function (err, value) {
        if (err) {
            if (!err.notFound) throw err;
        } else {
            console.log(key + '=' + value);
        }
        if (index < 100) {
            getNext(index+1);
        }
    });
}

getNext(0);
