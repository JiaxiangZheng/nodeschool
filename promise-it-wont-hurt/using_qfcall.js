var q = require('q');

function parseJSON(data) {
    var result = JSON.parse(data)
    return result;
}
q.fcall(parseJSON, process.argv[2]).then(console.log, console.log);
