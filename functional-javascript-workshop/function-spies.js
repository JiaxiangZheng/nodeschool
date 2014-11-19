function Spy(target, method) {
    var res = {
        method: target[method],
        count: 0
    }
    target[method] = function () {
        ++res.count
        return res.method.apply(this, arguments);
    }
    return res
}

module.exports = Spy;
