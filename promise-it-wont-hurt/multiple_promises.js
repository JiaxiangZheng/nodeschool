var Q = require('q');

var defers = [Q.defer(), Q.defer()],
    promises = [defers[0].promise, defers[1].promise];

function all(promiseA, promiseB) {
    var defer = Q.defer(),
        counter = 0,
        vs = new Array(2);

    promiseA.then(function (result) {
        vs[0] = result;
        counter += 1;
        if (counter >= 2) {
            defer.resolve(vs);
        }
    });

    promiseB.then(function (result) {
        vs[1] = result;
        counter += 1;
        if (counter >= 2) {
            defer.resolve(vs);
        }
    });

    return defer.promise;
}

all(promises[0], promises[1]).then(console.log).done();

setTimeout(function () {
    defers[0].resolve('PROMISES');
    defers[1].resolve('FTW');
}, 200)
