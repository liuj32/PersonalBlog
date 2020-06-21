/**
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