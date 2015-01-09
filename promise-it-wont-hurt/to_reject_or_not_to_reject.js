var q = require('q'),
    defer = q.defer();

var promise = defer.promise;
promise.then(console.log, console.log);

+function (user, defer) {
    if (user) {
        defer.resolve('I FIRED');
    } else {
        defer.reject('I DID NOT FIRE');
    }
}("Jiaxiang Zheng", defer); 
