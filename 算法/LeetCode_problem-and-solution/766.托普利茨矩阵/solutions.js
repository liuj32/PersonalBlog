/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  var rows = matrix.length
  var cols = matrix[0].length
  for(var i=1;i<rows;i++) {
      for(var j=1;j<cols;j++) {
          if (matrix[i][j] != matrix[i-1][j-1]) {
              return false
          }
      }
  }  
  return true
};