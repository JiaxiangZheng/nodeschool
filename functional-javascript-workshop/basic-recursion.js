function reduce(arr, fn, initial) {
    if (typeof initial === "undefined") {
        initial = 0;
    }
    return (function recursive(index) {
        if (index < arr.length) {
            initial = fn(initial, arr[index], index, arr);
            recursive(index + 1);
        }
        return initial;
    }(0));
}

module.exports = reduce
