// TODO:
// http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
function curryN(fn, n) {
    return function () {
        if (typeof n === 'undefined') {
            n = fn.length
        }
        if (n === 0) {
            return fn(arguments)
        } else {
            return function () {
                var len = arguments.length
                curryN(fn.bind(null, arguments), n-len)
            }
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
