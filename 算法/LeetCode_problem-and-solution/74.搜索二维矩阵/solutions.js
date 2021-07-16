/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length
    if (m === 0) {
      return false
    }
    var n = matrix[0].length
    var pivotIdx = 0, pivotElement = 0
    var left = 0, right = m * n - 1
    while(left <= right) {
      pivotIdx = Math.floor((right + left) / 2)
      pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n]
      if (target === pivotElement) {
        return true
      } else if (target > pivotElement) {
        left = pivotIdx + 1
      } else {
        right = pivotIdx - 1
      }
    }
  
    return false
  };
  