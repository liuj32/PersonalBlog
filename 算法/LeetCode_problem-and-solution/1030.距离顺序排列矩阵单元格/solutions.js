/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    var dist = (r1, c1, r2, c2) => {
        return Math.abs(r1 - r2) + Math.abs(c1 - c2);
    }  

    var maxDist = Math.max(r0, R - 1 - r0) + Math.max(c0, C - 1 - c0);
    var bucket = []
    for (var i = 0; i <= maxDist; i++) {
      bucket.push([])
    }

    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            var d = dist(i, j, r0, c0);
            bucket[d].push([i, j]);
        }
    }
    var ans = []
    var index = 0
    for (var i = 0; i <= maxDist; i++) {
        for (var it of bucket[i]) {
            ans[index++] = it;
        }
    }
    return ans;
};