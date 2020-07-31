/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
  说明：每次只能向下或者向右移动一步。
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length == 0) {
      return 0
  }
  var m = grid.length, n = grid[0].length
  var dp = []
  for(var row=0;row<m;row++) {
      dp[row] = []
      for(var col=0;col<n;col++) {
          if(col == 0 && row == 0) {
              dp[0][0] = grid[0][0]
              continue
          }
          if (row == 0) {
              dp[row][col] = grid[row][col] + dp[row][col-1]
          } else if (col == 0) {
              dp[row][col] = grid[row][col] + dp[row-1][col]
          } else {
              dp[row][col] = grid[row][col] + Math.min(dp[row-1][col], dp[row][col-1])
          }            
      }
  }
  return dp[m-1][n-1]
};