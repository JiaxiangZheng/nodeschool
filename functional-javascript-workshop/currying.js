// TODO:
// http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
var slice = Array.prototype.slice;

function curryN(fn) {
    var args = slice.call(arguments, 1);
    if (args.length === fn.length) {
        return fn.bind(null, args)
    } else if (args.length === 0) {
        return function () {
            curryN(fn, arguments)
        }
    }
}

function add3(one, two, three) {
    return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)

console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6

module.exports = curryN
