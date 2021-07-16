/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var ans = []
    for(var row=0;row<numRows;row++) {
      if (row === 0) {
        ans = [[1]]
        continue
      }
  
      ans[row] = []
      for(var col=0;col<=row;col++) {
        var lt = ans[row-1][col-1] || 0
        var rt = ans[row-1][col] || 0
        ans[row][col] = lt + rt
      }
    }
  
    return ans
  };