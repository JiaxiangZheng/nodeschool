module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (prev, cur, index, array) {
        prev.push(fn(cur, index, array));
        return prev;
    }, []);
}
