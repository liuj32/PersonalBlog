/**
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