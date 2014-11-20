// TODO: investigate this
// http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
var slice = Array.prototype.slice;

function curryN(fn, nArgs) {
    if (typeof nArgs === "undefined") nArgs = fn.length;

    function curry(prev) {
        return function (arg) {
            var args = prev.concat(arg)
            if (args.length === nArgs) {
                return fn.apply(this, args)
            } else {
                return curry(args)
            }
        };
    }
    return curry([])
}

module.exports = curryN
