var Q = require('q')

function throwMyGod() {
    throw new Error('OH NOES');
}
function iterate(value) {
    console.log(value);
    return value + 1;
}

Q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(throwMyGod)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate, console.log)
