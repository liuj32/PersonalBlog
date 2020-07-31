/**
 * 给定一个整数矩阵，找出最长递增路径的长度
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 * 
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length == 0) return 0
    var m = matrix.length, n = matrix[0].length

    var longest = 0
    var dirs = [[-1,0], [1, 0], [0, -1], [0, 1]]
    var memo = [...Array(m)].map(() => [])
    const dfs = (row, col, memo) => {
       if (memo[row][col] != null) {
           return memo[row][col]
       }
        memo[row][col] = 1
        for(var dir of dirs) {
            var newRow = row + dir[0], newCol = col + dir[1]
            if (newRow >=0 && newRow < m && newCol >=0 && newCol < n && matrix[newRow][newCol] > matrix[row][col]) {
                memo[row][col] = Math.max(memo[row][col], 1 + dfs(newRow, newCol, memo))
            }
        }
        return memo[row][col]
    }

    for(var row = 0;row<m;row++) {
        for(var col=0;col<n;col++) {
            longest =  Math.max(longest, dfs(row, col, memo))
        }
    }

    return longest
};