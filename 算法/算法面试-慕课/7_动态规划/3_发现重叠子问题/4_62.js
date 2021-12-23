/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
问总共有多少条不同的路径？
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
  var record = []
  for(var i=0;i<=n;i++) {
      record[i] = []
  }

  for(var i=0;i<n;i++) {
      for(var j=0;j<m;j++) {
          if (i == 0 || j == 0) {
              record[i][j] = 1
          } else {
              record[i][j] = record[i][j-1] + record[i-1][j]
          }
          
      }
  }

  return record[n-1][m-1]
};