/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var res = 0
    var stack = []
    heights = [0, ...heights, 0]
    var len = heights.length
    for(var i=0;i<len;i++) {
      while(stack.length && heights[stack[stack.length-1]] > heights[i]) {
        var tmp = stack.pop()
        res = Math.max(res, (i - stack[stack.length-1] - 1) * heights[tmp])
      }
      stack.push(i)
    }
  
    return res
  };