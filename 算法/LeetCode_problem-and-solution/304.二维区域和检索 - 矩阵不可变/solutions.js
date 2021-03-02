/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    var m = matrix.length
    if (m === 0) {
      return
    }
    var n = matrix[0].length
    for(var i=0;i<m;i++) {
      for(var j=1;j<n;j++) {
        matrix[i][j] += matrix[i][j-1]
      }
    }
  };
  
  /** 
   * @param {number} row1 
   * @param {number} col1 
   * @param {number} row2 
   * @param {number} col2
   * @return {number}
   */
  NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var sum = 0
    for(var row=row1;row<=row2;row++) {
      sum += this.matrix[row][col2] - (col1 - 1 < 0 ? 0 : this.matrix[row][col1 - 1])
    }
    return sum
  };
  
  /**
   * Your NumMatrix object will be instantiated and called as such:
   * var obj = new NumMatrix(matrix)
   * var param_1 = obj.sumRegion(row1,col1,row2,col2)
   */