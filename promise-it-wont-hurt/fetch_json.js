var HTTP = require('q-io/http'),
    promise = HTTP.read('http://localhost:1337');

promise.then(function (json) {
    console.log(JSON.parse(json.toString()));
}, function (err) {
    console.error(err);
});
