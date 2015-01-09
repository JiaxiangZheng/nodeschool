var q = require('q'),
    defer = q.defer();

var promise = defer.promise;
promise.then(console.log);
setTimeout(function () {
    defer.resolve('RESOLVED!');
}, 300);
