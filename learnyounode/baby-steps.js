// this is by intent :)
console.log([].slice.call(process.argv, 2).map(function (arg) {
    return +arg
}).reduce(function (prev, cur) {
    return prev + cur
}, 0))
