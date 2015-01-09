// NOTE: promise 允许链式调用
var q = require('q'),
    defer = q.defer();

var promise = defer.promise;
function attachTitle(msg) {
    return 'DR. ' + msg;
}

promise.then(attachTitle).then(console.log);

defer.resolve('MANHATTAN');
