/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var num = start
    for (var i=1;i<n;i++) {
        num =  (start + 2 * i ) ^ num
    }

    return num
};