/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 解法一： 空间复杂度：m+n
var setZeroes = function(matrix) {
    var rows = matrix.length
    if (rows === 0) {
      return []
    }
    var cols = matrix[0].length
    var rowMap = new Set()
    var colMap = new Set()
    for(var i=0;i<rows;i++) {
      for(var j=0;j<cols;j++) {
        if (matrix[i][j] === 0) {
          rowMap.add(i)
          colMap.add(j)
        }
      }
    }
    for(var i=0;i<rows;i++) {
      for(var j=0;j<cols;j++) {
        if (rowMap.has(i) || colMap.has(j)) {
          matrix[i][j] = 0
        }
      }
    }
    return matrix
  };

// 解法二：空间复杂度：o(1)
var setZeroes = function(matrix) {
    var rows = matrix.length
    if (rows === 0) {
      return []
    }
    var cols = matrix[0].length
    var rowFlag = false // 第一行标志位
    var colFlag = false // 第一列标志位
    // 第一行是否有零
    for(var i=0;i<cols;i++) {
      if (matrix[0][i] === 0) {
        rowFlag = true
      }
    }
    // 第一列是否有零
    for(var i=0;i<rows;i++) {
      if (matrix[i][0] === 0) {
        colFlag = true
      }
    }
    // 把第一行第一列作为标志位
    for(var i=1;i<rows;i++) {
      for(var j=1;j<cols;j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = matrix[i][0] = 0
        }
      }
    }
    // 置0
    for(var i=1;i<rows;i++) {
      for(var j=1;j<cols;j++) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0
        }
      }
    }
    // 第一行置0
    if (rowFlag) {
      for(var i=0;i<cols;i++) {
        matrix[0][i] = 0
      }
    }
    // 第一列置0
    if (colFlag) {
      for(var i=0;i<rows;i++) {
        matrix[i][0] = 0
      }
    }
  
    return matrix
  };