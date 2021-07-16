/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const m = matrix.length;
  if (m === 0) {
      return 0;
  }
  const n = matrix[0].length;
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === '1') {
              left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
          }
      }
  }

  var res = 0
  for(var j=0;j<n;j++) {
    var heights = []
    for(var i=m-1;i>=0;i--) {
      heights.push(left[i][j])
    }
    heights = [0, ...heights, 0]
    var stack = []
    var colMaxRect = 0
    for (var i=0;i<heights.length;i++) {
      while(stack.length && heights[stack[stack.length-1]] > heights[i]) {
        var tmp = stack.pop()
        colMaxRect = Math.max(colMaxRect, (i - stack[stack.length-1] - 1) * heights[tmp])
      }
      stack.push(i)
    }
    
    res = Math.max(res, colMaxRect)
  }

  return res
}