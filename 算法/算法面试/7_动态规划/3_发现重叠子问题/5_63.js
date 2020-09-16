/**
 * 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var record = []
  var n = obstacleGrid.length, m = obstacleGrid[0].length
  for(var i=0;i<=n;i++) {
      record[i] = []
  }

  for(var i=0;i<n;i++) {
      for(var j=0;j<m;j++) {
          if (obstacleGrid[i][j] == 1) {
              record[i][j] = 0
              continue
          }

          if (i == 0 || j == 0) {
              if (j > 0 && record[i][j-1] == 0 || i > 0 && record[i-1][j] == 0) {
                  record[i][j] = 0
              } else {
                record[i][j] = 1
              }
              
          } else {
              record[i][j] = record[i][j-1] + record[i-1][j]
          }
          
      }
  }