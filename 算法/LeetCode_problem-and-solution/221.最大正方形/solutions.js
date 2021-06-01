/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var dp = new Array(m).fill().map(() => new Array(n).fill(0))
    var maxEdeg = 0
    for(var i=0;i<m;i++) {
        for(var j=0;j<n;j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
                }
                maxEdeg = Math.max(maxEdeg, dp[i][j])
            }
        }
    }

    return maxEdeg * maxEdeg
};