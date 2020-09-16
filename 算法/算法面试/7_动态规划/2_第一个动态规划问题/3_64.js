/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var m = grid.length;
  var n = grid[0].length
  if (m == 0 || n == 0) {
      return 0;
  }
  if (m == 1) {
      return grid[m-1].reduce((a, b) => a+b, 0)
  }
  if (n == 1) {
      var sum = 0
      for(var i=0;i<m;i++) {
        sum += grid[i][0]
      }
      return sum
  }
  var  i = m -2
  grid[i][n-1] += grid[i+1][n-1]
  for(var j=n-2;j>=0;j--) {
      var bottom = 0, right = grid[i][j+1];
      for(var k=j;k<n;k++) {
          bottom += grid[i+1][k]
      }
      grid[i][j] += Math.min(bottom, right)
  }
  for(i = i-1;i>=0;i--) {
      grid[i][n-1] += grid[i+1][n-1]
      for(var j=n-2;j>=0;j--) {
          var bottom = grid[i+1][j], right = grid[i][j+1];
          grid[i][j] += Math.min(bottom, right)
      }        
  }
  return grid[0][0]    
};


// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。