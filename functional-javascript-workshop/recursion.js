module.exports = function (tree) {
    var result = []
    function getDependencies(obj) {
        if (typeof obj === 'undefined') return
        var keys = Object.keys(obj)
        keys.forEach(function (key) {
            var id = key + '@' + obj[key].version
            if (result.indexOf(id) > -1) {
                return
            }
            result.push(id)
            getDependencies(obj[key].dependencies)
        });
    }
    getDependencies(tree.dependencies)
    result.sort()
    return result
}
