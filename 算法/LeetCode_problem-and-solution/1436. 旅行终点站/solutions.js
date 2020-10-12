/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    var record = {}
    for(var path of paths) {
        record[path[0]] = path[1]
    }
    for(var path of paths) {
        if (!record[path[1]]) {
            return path[1]
        }
    }
};