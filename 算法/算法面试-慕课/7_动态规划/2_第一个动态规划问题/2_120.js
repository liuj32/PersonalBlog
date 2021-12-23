/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * @param {number[][]} triangle
 * @return {number}
 */

/** 回溯 */
var res
var minimumTotal = function(triangle) {
    res = undefined

    help(triangle, 0, 0, 0)
    return res
};

function help(triangle, row, col, temp) {
    if (row == triangle.length) {
        if (res == undefined) {
            res = temp
        } else {
            res = Math.min(temp, res)
        }
        return
    }

   var len = Math.min(col+1, triangle[row].length - 1)
   for(var i=col;i<=len;i++) {
      temp += triangle[row][i]
      help(triangle, row+1, i, temp)
      temp -= triangle[row][i]
   }
}

/** 动态规划 */

var minimumTotal = function(triangle) {
  for (var i=triangle.length-2;i>=0;i--) {
      for(var j=0;j<triangle[i].length;j++) {
          triangle[i][j] = triangle[i][j] + Math.min(triangle[i+1][j], triangle[i+1][j+1])
      }
  }

  return triangle[0][0]
};
