var Q = require('q');

var defers = [Q.defer(), Q.defer()];

// function all(promiseA, promiseB) {
//     var defer = Q.defer(),
//         counter = 0;
//     promiseA.then(function () { // resolve
//         counter++;
//         if (counter >= 2) {
//             defer.resolve();
//         }
//     }, function () {    // reject
//     });
//     return defer.promise;
// }

Q.all([promiseA, promiseB]).then(function () {

});
