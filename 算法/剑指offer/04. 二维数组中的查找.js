/**
 * 
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 //O(m+n)
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0) return false

  var rows = matrix.length, cols = matrix[0].length
  var row = 0, col = cols-1
  while(row < rows && col >= 0) {
      if (target == matrix[row][col]) {
          return true
      } else if (target > matrix[row][col]) {
          row++
      } else {
          col--
      }
  }
  return false
};