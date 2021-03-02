/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    var m = A.length
    var n = A[0].length
    for(var i = 0; i < m; i++) {
      for(var j = 0; j < n / 2; j++) {
        [A[i][j], A[i][m - j - 1]] = [1 ^ A[i][m - j - 1], 1 ^ A[i][j]]
      }
    }
  
    return A
  };