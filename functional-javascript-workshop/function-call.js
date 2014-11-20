// Function.call.call(Function, parameters)
// Function.call returns a Function, but for regular function, the call will
// invoke it
var slice = Function.call.bind(Array.prototype.slice)
module.exports = slice
