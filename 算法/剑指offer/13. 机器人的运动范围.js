/**
 * 
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 // 未解决
var movingCount = function(m, n, k) {
  var memo =  [...Array(m)].map(() => [])
  var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  const isLessK = (x, y) => {
      var xSum = 0, ySum = 0
      while(x > 10) {
          xSum += Math.floor(x / 10)
          x = x % 10
      }
      xSum += x
      while(y > 10) {
          ySum += Math.floor(y / 10)
          y = y % 10
      }
      ySum += y        
      return xSum + ySum <= k
  }
  const dfs = (row, col, memo) => {
      if (isLessK(row, col)) {
          memo[row][col] = true
          for(var dir of dirs) {
              var newRow = row + dir[0], newCol = col + dir[1]
              if (newRow >= 0 && newRow < m
                      && newCol >= 0 && newCol < n
                      &&!memo[newRow][newCol]) {
                      return 1 + dfs(newRow, newCol, memo)
              }
          }
          memo[row][col] = false
          return 1
      }
      return 0
  }

  var ans = 0
  for(var row=0;row<m;row++) {
      for(var col=0;col<n;col++) {
          ans = Math.max(ans, dfs(row, col, memo))
          memo =  [...Array(m)].map(() => [])
      }
  }
  return ans
};