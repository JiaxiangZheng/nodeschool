// Function.bind accept [this-scope, arguments]
// `fun.bind(o, a, b)(c, d)` equal to `fun.bind(o)(a, b, c, d)`
module.exports = function (namespace) {
    return console.log.bind(console, namespace);
};
