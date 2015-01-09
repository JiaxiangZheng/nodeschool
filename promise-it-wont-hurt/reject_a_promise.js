var q = require('q'),
    defer = q.defer();

var promise = defer.promise;
promise.then(null, function (err) {
    console.log(err.message);
});
setTimeout(function () {
    defer.reject(new Error('REJECTED!'));
}, 300);
