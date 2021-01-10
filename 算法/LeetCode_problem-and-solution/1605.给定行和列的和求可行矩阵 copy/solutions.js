/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    var n = rowSum.length, m = colSum.length;
    var ans = []
    for(var i=0;i<n;i++) {
        ans[i] = []
    }
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < m; ++j) {
            ans[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= ans[i][j];
            colSum[j] -= ans[i][j];
        }
    }
    return ans;
};