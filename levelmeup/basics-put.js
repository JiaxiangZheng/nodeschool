var level = require('level'),
    dbpath = process.argv[2],
    data = JSON.parse(process.argv[3]);

var db = level(dbpath);
for (var key in data) {
    db.put(key, data[key]);
}
