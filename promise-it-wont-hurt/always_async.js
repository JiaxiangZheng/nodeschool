// NOTE: promise 的 resolve
// 始终是会异步地触发回调，即便我们像下面这样同步的方式书写

var q = require('q'),
    defer = q.defer();

var promise = defer.promise;
promise.then(console.log, console.log);

defer.resolve('SECOND');

console.log('FIRST');
