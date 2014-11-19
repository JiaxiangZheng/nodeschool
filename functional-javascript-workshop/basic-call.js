function duckCount() {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        args = [].slice.call(arguments);

    return args.filter(function (arg) {
        return hasOwnProperty.call(arg, "quack");
    }).length;
}

module.exports = duckCount
