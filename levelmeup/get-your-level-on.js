// if the db does not exist, level(path) will create a new db
// db.put(key, value)
var level = require("level"),
    dbpath = process.argv[2],
    key = process.argv[3];

if (typeof dbpath === "undefined" || typeof key === "undefined") return;

var db = level(dbpath);
db.get(key, function (err, value) {
    if (err) {
        console.log("")
        return
    }
    console.log(value)
})
