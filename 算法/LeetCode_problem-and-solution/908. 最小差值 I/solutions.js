/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    var min = Infinity, max = 0
    for(var i=0;i<A.length;i++) {
        min = Math.min(min, A[i])
        max = Math.max(max, A[i])
    }
    if (min + 2*K >= max) {
        return 0
    } else {
        return max - min - 2 * K
    }
};